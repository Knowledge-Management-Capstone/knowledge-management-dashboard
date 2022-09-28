import { useSelector } from "react-redux";

function AttachmentEntry({ attachment }) {
  return <div>{attachment.name}</div>;
}

export default function AttachmentList() {
  const attachments = useSelector((state) => state.attachments);

  return (
    <div className="flex gap-2">
      {attachments.map(({ id, file }) => (
        <AttachmentEntry key={id} attachment={file} />
      ))}
    </div>
  );
}
