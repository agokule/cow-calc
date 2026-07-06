import type { TourStep } from "./GuidedTour";

export function getMainTourSteps(isMobile: boolean): TourStep[] {
  const steps: TourStep[] = [
    {
      id: "welcome",
      target: null,
      title: "Welcome to Cow Calc 👋",
      body: "This walkthrough shows you exactly where to click. It reacts as you go, so try actually doing each step rather than just reading it.",
    },
  ];

  if (isMobile) {
    steps.push({
      id: "open-sidebar",
      target: '[data-tour="sidebar-toggle"]',
      title: "Open the Unit Browser",
      body: "The unit list hides behind this menu button on small screens. Tap it to open the sidebar.",
      placement: "bottom",
      requiresAction: true,
      actionHint: "Tap the menu button above to continue.",
      // The sidebar is display:none until it's open, so its mere presence on
      // screen means the action is done (and going back here won't re-ask).
      actionComplete: '[data-tour="sidebar"]',
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
          page in a new tab — handy for double-checking doctrine numbers.
        </>
      ),
      placement: "right",
    },
    {
      id: "add-first-unit",
      // On mobile the drop box sits behind the open sidebar, so there's no
      // point anchoring to it — let the highlighted sidebar entries be the
      // focus instead. On desktop the box is the drop target for drag-drop.
      target: isMobile ? null : '[data-tour="your-first-stack"]',
      title: "Add your first unit",
      body: isMobile ? (
        <>
          Click <strong>&quot;Add to this Stack&quot;</strong> (highlighted), then tap any highlighted unit in the
          sidebar to add it here. (Drag-and-drop only works with a mouse, not on touchscreens.)
        </>
      ) : (
        <>
          Add units two ways: drag any highlighted unit from the sidebar into this box, or click{" "}
          <strong>&quot;Add to this Stack&quot;</strong> below and then click the highlighted units in the sidebar.
        </>
      ),
      placement: "right",
      requiresAction: true,
      actionHint: isMobile
        ? 'Click "Add to this Stack" below, then tap a unit in the sidebar, to continue.'
        : 'Drag a unit from the sidebar into this box, or use "Add to this Stack", to continue.',
      // The unit's controls only render once a unit is actually in the stack.
      actionComplete: '[data-tour="your-first-stack-controls"]',
      // Ring every addable unit in the sidebar. On mobile also ring the
      // "Add to this Stack" button (which is what the sidebar is hidden
      // behind until add-mode opens it).
      spotlightSelector: isMobile
        ? '[data-tour="sidebar-unit"], [data-tour="your-first-stack-add-btn"]'
        : '[data-tour="sidebar-unit"]',
    },
    {
      id: "unit-controls",
      target: '[data-tour="your-first-stack-controls"]',
      title: "Fine-tune the unit",
      body: "Set its doctrine, tech level, and quantity here. The slider (and the box next to it) control its current HP if it's already taken damage.",
      placement: "top",
    },
    {
      id: "add-another-stack",
      target: '[data-tour="add-list-you"]',
      title: "Need more than one stack?",
      body: (
        <>
          Click <strong>&quot;+ Add Unit List&quot;</strong> whenever you want a separate group of units — handy when
          infantry and tanks attack together but you want to track them separately.
        </>
      ),
      placement: "top",
    },
    {
      id: "enemy-side",
      target: isMobile ? null : '[data-tour="enemy-first-stack"]',
      title: "Now set up the enemy",
      body: "Do the same thing over here for the units you're fighting against — drag or tap any highlighted unit in the sidebar.",
      placement: "left",
      requiresAction: true,
      actionHint: isMobile
        ? 'Click "Add to this Stack" below, then tap a unit in the sidebar, to continue.'
        : 'Drag a unit from the sidebar into this box, or use "Add to this Stack", to continue.',
      actionComplete: '[data-tour="enemy-first-stack-controls"]',
      spotlightSelector: isMobile
        ? '[data-tour="sidebar-unit"], [data-tour="enemy-first-stack-add-btn"]'
        : '[data-tour="sidebar-unit"]',
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
