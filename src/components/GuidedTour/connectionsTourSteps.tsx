import type { TourStep } from "./GuidedTour";

export const connectionsTourSteps: TourStep[] = [
  {
    id: "welcome-connections",
    target: null,
    title: "Setting up the battle",
    body: "Each stack you built is now a box on this screen. Next you'll connect the boxes that are fighting each other, then run the calculation step by step.",
  },
  {
    id: "terrain",
    target: '[data-tour="tour-terrain-select"]',
    title: "Set the terrain",
    body: "This dropdown sets the terrain this stack is fighting on. It matters a lot — for example, artillery gets a big bonus in hills and mountains.",
    placement: "right",
  },
  {
    id: "view-army-info",
    target: '[data-tour="tour-army-info-btn"]',
    title: "Check the numbers",
    body: (
      <>
        Click <strong>&quot;View Army Info&quot;</strong> to see this stack&apos;s damage potential, efficiency, and
        how damage gets distributed across unit types.
      </>
    ),
    placement: "right",
    requiresAction: true,
    actionHint: 'Click "View Army Info" to continue.',
    // The dialog only exists on screen once it's been opened, so if you come
    // back to this step with it still open it counts as already done.
    actionComplete: ".dialog-container",
  },
  {
    id: "army-info-dialog",
    // Ring just the protection / home-turf section at the bottom of the dialog
    // rather than the whole modal — that's the part this step is about, and it
    // keeps the highlight off the (already dimmed) rest of the dialog.
    target: '[data-tour="army-info-footer"]',
    title: "Protection & home turf",
    body: "Set a Protection Value here if the stack gets a building bonus, and toggle Home Defense Bonus (+15%) if it's defending in its own territory. Close this dialog when you're ready to continue.",
    placement: "top",
    dimBackground: false,
  },
  {
    id: "position-stacks",
    target: '[data-tour="tour-your-node"]',
    title: "Line your stack up on top",
    body: "Drag your stack so it sits directly above the enemy stack. You connect from the dot at the bottom of your stack to the dot at the top of the enemy's, so stacking them vertically — yours on top — makes the next step line up cleanly.",
    placement: "right",
  },
  {
    id: "connect-stacks",
    target: '[data-tour="tour-source-handle"]',
    title: "Connect the stacks that fight",
    body: "Click and drag from this dot at the bottom of a stack to the matching dot on the enemy stack (or the other way around) to connect them in battle.",
    placement: "bottom",
    requiresAction: true,
    actionHint: "Drag from the dot to a matching dot on the enemy stack to continue.",
    // A connected edge shows its action buttons; that's proof the link exists.
    actionComplete: '[data-tour="tour-edge-source-action"]',
  },
  {
    id: "edge-actions",
    target: '[data-tour="tour-edge-source-action"]',
    title: "Choose attack, defend, or patrol",
    body: "Once two stacks are connected, click the icons on the line to set what each side does — attack, defend, patrol, both, or nothing — plus when and how often it repeats.",
    placement: "top",
  },
  {
    id: "start-battle",
    target: '[data-tour="tour-step-nav-start"]',
    title: "Run the calculation",
    body: (
      <>
        When everything&apos;s set, click <strong>&quot;Start Battle Calculation&quot;</strong> to simulate the
        fight.
      </>
    ),
    placement: "top",
    requiresAction: true,
    actionHint: 'Click "Start Battle Calculation" to continue.',
    // Once the battle starts, the Start button is replaced by the step-nav
    // Next control — so its presence means the calculation is running.
    actionComplete: '[data-tour="tour-step-nav-next"]',
  },
  {
    id: "step-through",
    target: '[data-tour="tour-step-nav-next"]',
    title: "Step through the fight",
    body: (
      <>
        Use Prev / Next to move through the battle one round at a time, or click <strong>&quot;Finish&quot;</strong>{" "}
        to jump straight to the final result.
      </>
    ),
    placement: "top",
  },
];
