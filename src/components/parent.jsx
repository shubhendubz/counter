import React from 'react';
import Button from 'react-bootstrap/Button';
import Child from './child';

const Parent = (props) => {

    const { counters, onDelete, onReset, onIncrement,deleteCount } = props;
    let getBadgeClass = () => {
        let classes = "badge m-1 badge-";
        classes += deleteCount === 0 ? "primary" : "warning";
        return classes;
    }
    let formatCount = () => {
        return deleteCount === 0 ? "Zero" : deleteCount;
    }
    return (
        <div className="col-6">
            <nav className="navbar navbar-expand navbar-light bg-dark m-3">
                <h4 className="text-white m-2">Deleted Count</h4>
                <span className={getBadgeClass()}>{formatCount()}</span>
            </nav>
            <Button variant="success" className="m-3" onClick={onReset}>Reset</Button>
            {counters.map((counter) => {
                return <Child key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter}
                />
            })}
        </div>
    );
}

export default Parent;