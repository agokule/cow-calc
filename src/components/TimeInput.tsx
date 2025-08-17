type TimeInputProps = {
  label: string;
  hours: number;
  minutes: number;
  onHoursChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onMinutesChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  hoursAriaLabel: string;
  minutesAriaLabel: string;
  className?: string;
};

const TimeInput: React.FC<TimeInputProps> = ({
  label,
  hours,
  minutes,
  onHoursChange,
  onMinutesChange,
  hoursAriaLabel,
  minutesAriaLabel,
  className,
}) => (
  <div className={className}>
    <span style={{ color: "black" }}>{label}</span>
    <input
      type="number"
      min={0}
      value={hours}
      onChange={onHoursChange}
      style={{ width: 48, padding: 2 }}
      aria-label={hoursAriaLabel}
    />
    <span style={{ color: "black" }}>h</span>
    <input
      type="number"
      min={0}
      max={59}
      value={minutes}
      onChange={onMinutesChange}
      style={{ width: 48, padding: 2 }}
      aria-label={minutesAriaLabel}
    />
    <span style={{ color: "black" }}>m</span>
  </div>
);

export default TimeInput;

