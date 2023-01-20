import React, { FunctionComponent, useState } from 'react'

type Props = { 
    head: string,
    desc: string,
}
const Accordion: FunctionComponent<Props> = ({head, desc}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <li className="accordion-item">
            <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
                <h3>{head}</h3><span>{isActive ? "-" : "+"}</span>
            </div>
            {isActive && <div className="accordion-content">{desc}</div>}
        </li>
    )
}

export default Accordion