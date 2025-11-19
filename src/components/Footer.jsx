function Footer() {
    return <footer className="footer">
        <p>
            Technologies and React concept used: React, JSX, props, useState, component composition, conditional rendering, array methods (map, filter), event handling.

            <a
                href="https://github.com/IveyIsMyName/taskList"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: '#0366d6',
                    textDecoration: 'none',
                    fontWeight: '500',
                    borderBottom: '1px solid transparent',
                    transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                    e.target.style.borderBottomColor = '#0366d6';
                }}
                onMouseOut={(e) => {
                    e.target.style.borderBottomColor = 'transparent';
                }}
            >
                🔗 View Source Code
            </a>
        </p>
    </footer>
}

export default Footer;