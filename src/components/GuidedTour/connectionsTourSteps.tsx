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
        how damage gets distributed across unit types. You can compare it against the in game stats to make sure that you entered the information correctly.
      </>
    ),
    placement: "right",
    requiresAction: true,
    actionHint: 'Click "View Army Info" to continue.',
    satisfiedWhen: '[data-tour="tour-protection-section"]',
  },
  {
    id: "army-info-dialog",
    target: '[data-tour="tour-protection-section"]',
    title: "Protection & home turf",
    body: "Copy the Protection Value from the game here if the unit is in fortifications, and toggle Home Defense Bonus if it's defending in its core territory.",
    placement: "top",
    dimBackground: false,
    requiresAction: true,
    actionHint: "Close the army info dialog to continue.",
    satisfiedWhenTargetGone: true,
  },
  {
    id: "arrange-stacks",
    target: '.react-flow__node[data-id="your-0"]',
    title: "Line them up",
    body: "Not required, but it helps: drag your stack's box so it sits directly above the enemy stack it's fighting. Then the next step is a straight drag down instead of reaching across.",
    placement: "right",
  },
  {
    id: "connect-stacks",
    target: '[data-tour="tour-source-handle"]',
    title: "Connect the stacks that fight",
    body: ("Click and drag from this dot at the bottom of a stack to the top dot on the enemy stack (NOT the other way around) to connect them in battle."),
    placement: "bottom",
    requiresAction: true,
    actionHint: "Drag from the dot to a matching dot on the enemy stack to continue. (you can drag this off to the side if needed)",
    satisfiedWhen: '[data-tour="tour-edge-source-action"]',
  },
  {
    id: "edge-actions",
    target: '[data-tour="tour-edge-source-action"]',
    title: "Choose attack, both attack and defend, or patrol",
    body: (
      <>
        Once two stacks are connected, click the icons on the line to set what each side does — attack, defend, patrol, both, or nothing — plus when it starts and how often it repeats.
        <ul>
          <li>Use attack and defend if it is standard melee combat</li>
          <li>Use the "Both" option if the game shows an attack icon on both stacks</li>
          <li>Use attack and nothing if it is an artillery stack attacking another unit with no deamage being delt back</li>
          <li>Use patrol and defend if it is an air unit patrolling over another stack</li>
          <li>Use attack on both sides if it is 2 artillery stacks attacking eachother</li>
        </ul>
      </>
    ),
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
    satisfiedWhen: '[data-tour="tour-step-nav-next"]',
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
