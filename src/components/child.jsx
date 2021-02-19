import React from 'react';
import Button from 'react-bootstrap/Button';
const Child = (props) => {

    const { counter, onDelete, onIncrement } = props;
    let getBadgeClass = () => {
        let classes = "badge m-3 badge-";
        classes += counter.value === 0 ? "primary" : "warning";
        return classes;
    }
    let formatCount = () => {
        return counter.value === 0 ? "Zero" : counter.value;
    }
    return (
        <>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-2">
                    <span className={getBadgeClass()}>{formatCount()}</span>
                </div>
                <div className="col-2">
                    <Button className="m-2" variant="secondary" onClick={() => onIncrement(counter)}>
                        <i className="fa fa-plus"></i>
                    </Button>
                </div>
                <div className="col-2">
                    <Button className="m-2" variant="danger" onClick={() => onDelete(counter.id)}>
                        <i className="fa fa-minus"></i>
                    </Button>
                </div>
                <div className="col-3"></div>
            </div>
        </>
    );
}

export default Child;