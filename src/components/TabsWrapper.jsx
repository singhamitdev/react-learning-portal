const TabsWrapper = ({ children, buttonContent, TagName }) => {
  return (
    <>
      <TagName>{buttonContent}</TagName>
      {children}
    </>
  );
};

export default TabsWrapper;
