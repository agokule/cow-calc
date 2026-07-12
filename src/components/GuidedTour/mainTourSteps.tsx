import type { TourStep } from "./GuidedTour";

export function getMainTourSteps(isMobile: boolean): TourStep[] {
  const steps: TourStep[] = [
    {
      id: "welcome",
      target: null,
      title: "Welcome to Cow Calc 👋",
      body: "This walkthrough shows you exactly where to click. It reacts as you go, so try actually doing each step rather than just reading it. (PS: this widget can be dragged around!)",
    },
  ];

  if (isMobile) {
    steps.push({
      id: "open-sidebar",
      target: '[data-tour="sidebar-toggle"]',
      title: "Open the Unit Browser",
      body: "The unit list hides behind this menu button on mobile. Tap it to open the sidebar.",
      placement: "bottom",
      requiresAction: true,
      actionHint: "Tap the menu button above to continue.",
      satisfiedWhen: '[data-tour="sidebar"]',
    });
  }

  steps.push(
    {
      id: "sidebar-browse",
      target: '[data-tour="sidebar"]',
      title: "The Unit Browser",
      body: (
        <>
          Every unit in the game lives here, grouped by category. Click a unit&apos;s name to open its full stats
          page in a new tab. You can also run this tutorial again, and report bugs through here.
        </>
      ),
      placement: "right",
    },
    {
      id: "add-first-unit",
      target: '[data-tour="your-first-stack-add-btn"]',
      highlightSidebar: true,
      hidePrimaryRingWhileSecondaryVisible: isMobile,
      title: "Add your first unit",
      body: isMobile ? (
        <>
          Click <strong>&quot;Add to this Stack&quot;</strong> below, then tap units in the sidebar to add them here.
          (on desktop, you can also use drag and drop, but not on touchscreens.)
        </>
      ) : (
        <>
          Add units two ways: drag and drop one straight from the sidebar into this box, or click the first {" "}
          <strong>&quot;Add to this Stack&quot;</strong> button on screen and then click units in the sidebar.
        </>
      ),
      placement: "right",
      requiresAction: true,
      actionHint: isMobile
        ? 'Click "Add to this Stack" below, then tap a unit in the sidebar, to continue.'
        : 'Drag a unit from the sidebar into this box, or use "Add to this Stack" and click a unit in the sidebar, to continue.',
      satisfiedWhen: '[data-tour="your-first-stack-controls"]',
      secondaryTarget: '[data-tour="sidebar"]',
    },
    {
      id: "unit-controls",
      target: '[data-tour="your-first-stack-controls"]',
      title: "Fine-tune the unit",
      body: "Set its doctrine, research level, and quantity here. The slider (and the box next to it) control its current HP if it's already taken damage.",
      placement: "top",
    },
    {
      id: "add-another-stack",
      target: '[data-tour="add-list-you"]',
      title: "Need more than one stack?",
      body: (
        <>
          Click <strong>&quot;+ Add Unit List&quot;</strong> whenever you want a separate group of units — handy when
          you have one stack engaging in melee combat, but then some artillery and/or planes attacking separately.
          Leave it for this tutorial.
        </>
      ),
      placement: "top",
    },
    {
      id: "enemy-side",
      target: '[data-tour="enemy-first-stack"]',
      title: "Now set up the enemy",
      body: "Do the same thing over here for the units you're fighting against.",
      placement: "left",
      requiresAction: true,
      highlightSidebar: true,
      hidePrimaryRingWhileSecondaryVisible: isMobile,
      actionHint: isMobile
        ? 'Click "Add to this Stack" below, then tap a unit in the sidebar, to continue.'
        : 'Drag a unit from the sidebar into this box, or use "Add to this Stack", to continue.',
      satisfiedWhen: '[data-tour="enemy-first-stack-controls"]',
      secondaryTarget: '[data-tour="sidebar"]',
    },
    {
      id: "connections-button",
      target: '[data-tour="connections-button"]',
      title: "Ready? Head to Connections",
      body: (
        <>
          Once both sides have at least one stack, click <strong>&quot;Connections&quot;</strong> to decide who
          fights who and run the calculation.
        </>
      ),
      placement: "left",
    }
  );

  return steps;
}
