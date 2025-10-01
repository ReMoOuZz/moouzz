import React from 'react';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container">
          <a className="navbar-brand" href="#"> {{APP_NAME}} </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
                  aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <a className="btn btn-primary" href="#">Get Started</a>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <h1 className="display-5 mb-3">React + Vite + Bootstrap</h1>
        <p className="lead">Bienvenue sur <strong>{{APP_NAME}}</strong>. Modifie <code>src/App.jsx</code> et sauvegarde.</p>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Carte 1</h5>
                <p className="card-text">Exemple de composant Bootstrap.</p>
                <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
                  Ouvrir la modal
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Carte 2</h5>
                <p className="card-text">Personnalise les styles dans <code>src/index.css</code>.</p>
                <a className="btn btn-primary" href="#">Action</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="modal fade" id="demoModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal démo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              Hello depuis Bootstrap JS (bundle).
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              <button className="btn btn-primary">OK</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
