function Principal({ children }) {
    return (
      <>
        <sidenav>
          <a href="/lista">Lista</a>
          <a href="/crear">Crear</a>
        </sidenav>
        <div>{children}</div>
      </>
    );
  }
  
  export default Principal;
  