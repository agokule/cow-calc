"use client";

import { useState, useEffect, useRef, DragEvent, useContext } from "react";
import { UnitListsContext } from "@/context/UnitListsContext";
import TrashIcon from '@/components/TrashIcon';
import GuidedTour, { TourLaunchButton } from '@/components/GuidedTour/GuidedTour';
import { useTourState } from '@/components/GuidedTour/useTourState';
import { getMainTourSteps } from '@/components/GuidedTour/mainTourSteps';
import { UnitListType, Doctrine, IUnitType, UnitName, UnitType, UnitClass } from "@/types";
import { unitDataCategorized } from "@/data/units";
import Link from 'next/link';
import UnitList from '@/components/UnitList';
import { Unit } from "@/utils/Unit";
import { getUnitType } from "@/utils/getUnitType";
import { useIsMobile } from "@/utils/isOnMobile";
import { NewBadge } from "@/components/NewBadge";
import { UnitIcon } from "@/components/UnitIcon";

interface AddModeData {
  listIndex: number;
  listType: UnitListType;
};

export default function Home() {
  // any units put in the array below will get a "NEW" badge in the sidebar
  const newUnits: UnitName[] = ['Sniper', 'Flame Tank', 'Amphibious Tank', 'Marines'] as const

  const [selectedUnitData, setSelectedUnitData] = useState<IUnitType | IUnitType[]>(
    unitDataCategorized.Infantry[0]
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [addMode, setAddMode] = useState<AddModeData | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarToggleRef = useRef<HTMLButtonElement>(null);

  const isOnMobile = useIsMobile();
  const mainTourSteps = getMainTourSteps(isOnMobile);
  const tour = useTourState("cow-calc-tour-main-v1");
  const highlightSidebar = tour.isOpen && !!mainTourSteps[tour.stepIndex]?.highlightSidebar;

  const { yourUnitLists, setYourUnitLists, enemyUnitLists, setEnemyUnitLists } = useContext(UnitListsContext)!;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        sidebarToggleRef.current &&
        !sidebarToggleRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    console.log("sidebar", addMode, isSidebarOpen)

    if (addMode && !isSidebarOpen && isOnMobile)
      setAddMode(null);
  }, [isSidebarOpen])

  useEffect(() => {
    console.log("addmode", addMode, isSidebarOpen)

    if (addMode && !isSidebarOpen && isOnMobile)
      setIsSidebarOpen(true);
  }, [addMode])

  // so that when we move from the connections page
  // back here, it doesn't show duplicated items
  useEffect(() => {
    const mappingFunc = (list: Unit[]) => {
      const unitsFound = new Set<string>()

      return list.filter((unit) => {
        if (unitsFound.has(unit.genericName))
          return false
        unitsFound.add(unit.genericName)
        return true
      })
    }
    const newYourUnitLists = yourUnitLists.map(mappingFunc)
    const newEnemyUnitLists = enemyUnitLists.map(mappingFunc)
    setEnemyUnitLists(newEnemyUnitLists)
    setYourUnitLists(newYourUnitLists)
  }, [])

  const handleDragStart = (e: DragEvent<HTMLAnchorElement>, unit: Unit) => {
    e.dataTransfer.setData("application/json", JSON.stringify(unit));
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const addUnit = (listType: UnitListType, listIndex: number, newUnit: Unit) => {
    const lists = listType === "you" ? yourUnitLists : enemyUnitLists;
    const setLists = listType === "you" ? setYourUnitLists : setEnemyUnitLists;

    const currentList = lists[listIndex];

    if (currentList.length > 0) {
      const listCategory = getUnitType(currentList[0].genericName, currentList[0].mode);
      const newItemCategory = getUnitType(newUnit.genericName, newUnit.mode)
      if (newItemCategory !== listCategory) {
        console.log(listCategory, newItemCategory)
        alert(`You can only add ${UnitType[listCategory as UnitType]} units to this list.`);
        return;
      }
    }

    const newLists = [...lists];
    newLists[listIndex] = [...currentList, newUnit];
    setLists(newLists);

    if (listIndex === 0) {
      tour.advanceIfStepIs(mainTourSteps, listType === "you" ? "add-first-unit" : "enemy-side");
      if (isOnMobile && tour.isOpen && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
      if (tour.isOpen && addMode && !isOnMobile)
        setAddMode(null)
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, listType: UnitListType, listIndex: number) => {
    e.preventDefault();
    const newUnit: Unit = JSON.parse(e.dataTransfer.getData("application/json"));
    addUnit(listType, listIndex, newUnit);
  };

  const handleDelete = (listIndex: number, unitIndex: number, listType: UnitListType) => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex].splice(unitIndex, 1);
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex].splice(unitIndex, 1);
      setEnemyUnitLists(newLists);
    }
  };

  const addUnitList = (listType: UnitListType) => {
    if (listType === "you") {
      setYourUnitLists([...yourUnitLists, []]);
      tour.advanceIfStepIs(mainTourSteps, "add-another-stack");
    } else {
      setEnemyUnitLists([...enemyUnitLists, []]);
    }
  };

  const deleteUnitList = (listIndex: number, listType: UnitListType) => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists.splice(listIndex, 1);
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists.splice(listIndex, 1);
      setEnemyUnitLists(newLists);
    }
  };

  type UnitKey = (keyof Unit)
  const editUnitProperty = <K extends UnitKey>(listIndex: number, unitIndex: number, listType: UnitListType, property: K, newValue: Unit[K]) => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex][unitIndex][property] = newValue;
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex][unitIndex][property] = newValue;
      setEnemyUnitLists(newLists);
    }
  }

  const handleDoctrineChange = (listIndex: number, unitIndex: number, doctrine: Doctrine, listType: UnitListType) => {
     if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex][unitIndex].doctrine = doctrine;
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex][unitIndex].doctrine = doctrine;
      setEnemyUnitLists(newLists);
    }
  };

  const handleLevelChange = (listIndex: number, unitIndex: number, level: number, listType: UnitListType) => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex][unitIndex].level = level;
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex][unitIndex].level = level;
      setEnemyUnitLists(newLists);
    }
  };

  const handleQuantityChange = (listIndex: number, unitIndex: number, quantity: number, listType: UnitListType) => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex][unitIndex].quantity = quantity;
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex][unitIndex].quantity = quantity;
      setEnemyUnitLists(newLists);
    }
  };

  const handleHpChange = (listIndex: number, unitIndex: number, hp: string, listType: UnitListType) => {
    editUnitProperty(listIndex, unitIndex, listType, "hp", hp)
  }

  return (
    <main>
      <div className="connections-button-container">
        <Link href="/connections" onClick={() => tour.close()}>
          <button className="connections-button" data-tour="connections-button">
            Connections
          </button>
        </Link>
      </div>
      <GuidedTour
        steps={mainTourSteps}
        isOpen={tour.isOpen}
        stepIndex={tour.stepIndex}
        onStepChange={tour.setStepIndex}
        onClose={tour.close}
      />
      {!tour.isOpen && <TourLaunchButton onClick={tour.restart} />}
      <div className="main-layout">
        <button
          className="sidebar-toggle"
          data-tour="sidebar-toggle"
          onClick={() => {
            const opening = !isSidebarOpen;
            setIsSidebarOpen(opening);
            if (opening) tour.advanceIfStepIs(mainTourSteps, "open-sidebar");
          }}
          ref={sidebarToggleRef}
        >
          &#9776;
        </button>
        <nav
          className={`sidebar ${isSidebarOpen ? 'open' : ''} ${highlightSidebar ? 'tour-highlight-group' : ''}`}
          data-tour="sidebar"
          ref={sidebarRef}
        >
          <h2>Unit Browser</h2>
          {
            addMode ?
            (
              <p style={{display : 'inline'}}>
              Add Mode enabled, click on units here to add them to the stack/list.
              To exit add mode, simply close the sidebar, or click on one of the "Stop Adding" buttons
              </p>
            ) : null
          }
          {Object.entries(unitDataCategorized).map(([category, units]) => (
            <div key={category} className="sidebar-category">
              <h3>{category}</h3>
              <ul>
                {units.map((unitData) => {
                  const unitName = unitData.genericName;
                  const mode = unitData.mode;
                  const slug = unitName.toLowerCase().replace(/ /g, '-');
                  const modeSlug = mode ? `?mode=${mode.toLowerCase().replace(/ /g, '-')}` : '';
                  const currentUnitName = Array.isArray(selectedUnitData) ? selectedUnitData[0].genericName : selectedUnitData.genericName;

                  const newUnit: Unit = { category, genericName: unitName, quantity: 1, mode, hp: "100%", doctrine: "Allies", level: 1 };
                  const unitType: UnitClass = unitData.doctrineVariants.Allies[0].type;

                  return (
                    <li key={unitName + (mode || '')} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <UnitIcon unitClass={unitType} size="1.8ch"/>
                      {
                        addMode ?
                          (<button onClick={() => addUnit(addMode.listType, addMode.listIndex, newUnit)} className={unitName === currentUnitName ? 'active' : ''}>
                            {unitName} {mode && `(${mode})`}
                          </button>)
                          :
                        (<Link href={`/unit/${slug}${modeSlug}`} passHref target="_blank" className={unitName === currentUnitName ? 'active' : ''}
                          onClick={() => setSelectedUnitData(unitData)}
                          draggable
                          onDragStart={(e) => handleDragStart(e, newUnit)}>
                            {unitName} {mode && `(${mode})`}
                        </Link>)
                      }
                      {
                        (newUnits.includes(unitName)) && <NewBadge/>
                      }
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="content">
          {(['you', 'enemy'] as const).map((id: UnitListType) => (
            <div key={id} className="unit-list-wrapper">
              <h2>{id.replace(/\b\w/g, char => char.toUpperCase())}</h2>
              {(id == "you" ? yourUnitLists : enemyUnitLists).map((units, index) => (
                <div key={index} className="unit-list-item">
                  <UnitList
                    units={units}
                    onDrop={(e) => handleDrop(e, id, index)}
                    onDragOver={handleDragOver}
                    onDelete={(unitIndex) => handleDelete(index, unitIndex, id)}
                    onDoctrineChange={(unitIndex, doctrine) => handleDoctrineChange(index, unitIndex, doctrine, id)}
                    onLevelChange={(unitIndex, level) => handleLevelChange(index, unitIndex, level, id)}
                    onQuantityChange={(unitIndex, quantity) => handleQuantityChange(index, unitIndex, quantity, id)}
                    onHpChange={(unitIndex, hp) => handleHpChange(index, unitIndex, hp, id)}
                    toggleAddMode={() => {
                      if (addMode)
                        setAddMode(null);
                      else
                        setAddMode({listType: id, listIndex: index});
                    }}
                    addModeState={addMode ? true : false}
                    tourTag={index === 0 ? (id === "you" ? "your-first-stack" : "enemy-first-stack") : undefined}
                  />
                  <button onClick={() => deleteUnitList(index, id)} className="delete-list-btn">
                    <TrashIcon />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addUnitList(id)}
                className="add-list-btn"
                data-tour={id === "you" ? "add-list-you" : "add-list-enemy"}
              >
                + Add Unit List
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

