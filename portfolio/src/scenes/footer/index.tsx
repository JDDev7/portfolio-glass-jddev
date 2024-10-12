import React from 'react'



const Footer = () => {
  return (
    <footer>
        <div className="footer-text">
            <p>&copy; {`${new Date().getFullYear()} creado por José Diego Moreno, con ♥ y React.`}</p>
        </div>
    </footer>
  )
}

export default Footer