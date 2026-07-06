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
      target: '[data-tour="your-first-stack"]',
      title: "Add your first unit",
      body: isMobile ? (
        <>
          Click <strong>&quot;Add to this Stack&quot;</strong> below, then tap units in the sidebar to add them here.
          (Drag-and-drop only works with a mouse, not on touchscreens.)
        </>
      ) : (
        <>
          Add units two ways: drag one straight from the sidebar into this box, or click{" "}
          <strong>&quot;Add to this Stack&quot;</strong> below and then click units in the sidebar.
        </>
      ),
      placement: "right",
      requiresAction: true,
      actionHint: isMobile
        ? 'Click "Add to this Stack" below, then tap a unit in the sidebar, to continue.'
        : 'Drag a unit from the sidebar into this box, or use "Add to this Stack", to continue.',
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
      target: '[data-tour="enemy-first-stack"]',
      title: "Now set up the enemy",
      body: "Do the same thing over here for the units you're fighting against.",
      placement: "left",
      requiresAction: true,
      actionHint: isMobile
        ? 'Click "Add to this Stack" below, then tap a unit in the sidebar, to continue.'
        : 'Drag a unit from the sidebar into this box, or use "Add to this Stack", to continue.',
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
