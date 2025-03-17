// Créateur de livre - une "factory function"
export class Livre {
  constructor(titre, isbn, nb_pages, annee_publication, uniquement_sur_place) {
    this.titre = titre;
    this.isbn = isbn;
    this.nb_pages = nb_pages;
    this.annee_publication = annee_publication;
    this.uniquement_sur_place = uniquement_sur_place;
  }

  // Validations
  estValide() {
    const erreurs = [];
    if (!this.titre === "") {
      erreurs.push({ valide: false, erreur: "Le titre est requis" });
    }

    if (isNaN(this.isbn)) {
      erreurs.push({ valide: false, erreur: "L'isbn doit être un number" });
    }
    if (this.isbn.length !== 15) {
      erreurs.push({
        valide: false,
        erreur: "L'isbn doit faire 15 charactères",
      });
    }

    if (!this.nb_pages === "") {
      erreurs.push({ valide: false, erreur: "Le nombre de page est requis" });
    }
    if (this.nb_pages < 100) {
      erreurs.push({
        valide: false,
        erreur: "Le nombre de page doit être supérieur à 100",
      });
    }
    if (this.annee_publication) {
      const [year, month, day] = this.annee_publication.split("-");
      if (year.length !== 4) {
        erreurs.push({
          valide: false,
          erreur: "L'année doit contenir 4 chiffres",
        });
      }
      if (month < 1 || month > 12) {
        erreurs.push({
          valide: false,
          erreur: "Le mois doit etre compris entre 1 et 12",
        });
      }
      if (day < 1 || day > 31) {
        erreurs.push({
          valide: false,
          erreur: "Le jour doit être compris entre 1 et 31",
        });
      }
    }
    if (isNaN(this.uniquement_sur_place)) {
      erreurs.push({
        valide: false,
        erreur: "Uniquement sur place doit être un nombre",
      });
    }
    return erreurs;
  }
}
