import NavBar from '../components/NavBar'

export default function About(){
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-4">Σχετικά με το VetFinder GR</h1>
        <p className="text-blue-200/90 leading-7">
          Το VetFinder GR είναι ένας σύγχρονος και κομψός ηλεκτρονικός κατάλογος για κτηνιάτρους σε όλη την Ελλάδα.
          Στόχος μας είναι να βοηθήσουμε ιδιοκτήτες κατοικιδίων να βρίσκουν άμεσα αξιόπιστους επαγγελματίες κοντά τους,
          με πραγματικές αξιολογήσεις, πληροφορίες ωραρίων και διαθέσιμες υπηρεσίες.
        </p>
        <p className="text-blue-200/90 leading-7 mt-4">
          Οι καταχωρήσεις επαληθεύονται και ο κατάλογος ενημερώνεται συνεχώς για να προσφέρουμε την καλύτερη δυνατή εμπειρία.
        </p>
      </div>
    </div>
  )
}
