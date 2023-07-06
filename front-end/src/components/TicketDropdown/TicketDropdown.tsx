interface Props {
  items: string[];
}

function TicketDropdown({ items }: Props) {
  return (
    <select
      className="select-data-limit-form rounded-pill mx-2"
      aria-label="Select ticket status"
      name="ticket-items"
      id="ticketItems"
    >
      {items.map((item: string) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default TicketDropdown;
