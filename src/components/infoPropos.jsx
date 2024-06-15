import Dropdown from "./Dropdown";


 function InfosPropos() {

  return (
    <div className="MenuDropDownPropos">
      <Dropdown title="Fiabilité" className="dropdown-container">
        <p >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
          toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </Dropdown>
      <Dropdown title="Respect" className="dropdown-container">
        <p >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entrainera une exclusion de notre plateforme</p>
      </Dropdown>
      <Dropdown title="Service" className="dropdown-container">
        <p >La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entrainera une exclusion de notre plateforme</p>
      </Dropdown>
      <Dropdown title="Sécurité" className="dropdown-container">
        <p >La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
          chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </Dropdown>
    </div>
  );
}
export default InfosPropos;