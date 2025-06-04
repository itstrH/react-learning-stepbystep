const Tabs = ({button, children, ButtonsContainer = "menu"}) => {
    return (
    <>
        <ButtonsContainer>{button}</ButtonsContainer>
        {children}
    </>
  )
}

export default Tabs