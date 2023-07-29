import {useState,useEffect} from "react";

    const withMousePosition = (WrappedComponent)=>{
        return (props)=>{
          const [mousePosition , setMousePosition] = useState({
            x: 0,
            y: 0
          });
          useEffect(()=>{
            const handleMousePositionChange = (e) =>{
              setMousePosition({
                x:e.clientX,
                y:e.clientY,
              });
            };
            window.addEventListener("mousemove", handleMousePositionChange);
            return ()=>{
              window.removeEventListener("mousemove", handleMousePositionChange);
            }
          },[]);
          return <WrappedComponent {...props} mousePosition = {mousePosition}/>;
        }
      }
      
      
      
      const PanelMouseLogger = ({mousePosition})=>{
        if(!mousePosition) {
          return null;
        }
        return(
          <>
            <p>Mouse Position:</p>
            <div>
              <p>x: {mousePosition.x}</p>
              <p>y: {mousePosition.y}</p>
              <span></span>
            </div>
          </>
        )
      }
      
      const PointMouseLogger = ({mousePosition})=>{
        if(!mousePosition){
          return null;
        }
        return(
          <>
          {mousePosition.x} {mousePosition.y}
          </>
        )
      }
      const PanelMouseTracker = withMousePosition(PanelMouseLogger);
      const PointMouseTracker = withMousePosition(PointMouseLogger);
      function HOC() {
        return (
          <>
            {/* <RegistrationForm/> */}
            {/* <BasicTodo/> */}
            <h1>Learn HOC</h1>
            <PanelMouseTracker/>
            <PointMouseTracker/>
          </>
        );
        }
        export default HOC;