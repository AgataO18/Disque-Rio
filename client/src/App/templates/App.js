import Nav from "./Nav"
import Support from "./Support"
import News from "./News";
import Info from "./Info";
import Help from "./Help";

export default function App() {
    return (
      <main > 
        <Nav/>
        <Help/>
        <News/>
        <Info/>
        <Support/>
        <footer/>        
      </main>
    )
  
}

// function SignIn(){  return( <section id="signin">   login       </section>  ) }
