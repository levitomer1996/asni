import React, { useEffect } from "react";
import useGetContactusMessages from "../../../../hooks/useGetContactusMessages";
import MailTable from "./Comps/MailTable";

//Page
function MailPage() {
  const [getMessages, messages, spinner] = useGetContactusMessages();
  useEffect(() => getMessages(), []);
  return (
    <div>
      <MailTable mailList={messages} />
    </div>
  );
}

export default MailPage;
