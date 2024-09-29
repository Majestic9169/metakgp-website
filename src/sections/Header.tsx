export const HeaderSection = () => {
  return (
    <div className="header">
      {/*<img className="metakgp-logo=metakgp-logo-one-line" src={MetaKGPLogoOneLine} width="150rem" />*/}
      <h1 className='metakgp-logo' data-set="metaKGP"
      ><span className='bold'>meta</span><span className='black'>KGP</span></h1>
      <nav className="nav-bar">
        <a href="#" className="nav-element">About</a>
        <a href="#" className="nav-element">Projects</a>
        <a href="#" className="nav-element">Contribute</a>
        <a href="#" className="nav-element">DC++</a>
      </nav>
    </div>
  )
}