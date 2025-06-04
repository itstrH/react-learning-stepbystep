const Tabs = ({button, children, ButtonsContainer}) => {
    return (
    <>
        <ButtonsContainer>{button}</ButtonsContainer>
        {children}
    </>
  )
}

export default Tabs