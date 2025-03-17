export class Emprunt {
  constructor(membre_id, exemplaire_id) {
    this.membre_id = membre_id;
    this.exemplaire_id = exemplaire_id;
  }
  estValide() {
    const erreurs = [];
    if (this.membre_id === "") {
      erreurs.push({ valide: false, erreur: "Le membre id est requis" });
    }

    if (isNaN(this.membre_id)) {
      erreurs.push({
        valide: false,
        erreur: "Le membre id doit être un nombre",
      });
    }
    if (isNaN(this.exemplaire_id)) {
      erreurs.push({ valide: false, erreur: "L'exemplaire id est requis" });
    }
    if (this.exemplaire_id === "") {
      erreurs.push({
        valide: false,
        erreur: "L'exemplaire id doit être un nombre",
      });
    }
    return erreurs;
  }
}
