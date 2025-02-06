import {useState} from "react";
import moment from "moment";
import ModalContainer from "../../components/ui/ModalContainer/ModalContainer.jsx";


const WaterPage = () => {
    const [amountOfWater, setAmountOfWater] = useState(50);

    const [time, setTime] = useState(moment().format('HH:mm'));

    const decreaseAmountOfWater = () => {
        setAmountOfWater(prevState => {
            const newValue = prevState - 50;
            if (newValue < 0) {
                return prevState
            }
            return newValue
        })
    }

    const increaseAmountOfWater = () => setAmountOfWater(prevState => prevState + 50)

    const save = () => {
        console.log(
            amountOfWater,time
        )
    }

    const setAmountOfWaterFromInput = (e) => {
        const value = e.target.value;

        setAmountOfWater(Number(value))
    }


    return (
        <>
            <ModalContainer isOpen={true}>
                <div>
                    <div>
                        <div className='form-title'>Add form</div>
                        <div className='form-title'>X</div>
                    </div>

                    <div className='form-item'>
                        <p>Choose a value : </p>
                        <div>
                            Amount of water
                            <button onClick={decreaseAmountOfWater}>-</button>
                            {amountOfWater} ml
                            <button onClick={increaseAmountOfWater}>+</button>
                        </div>
                    </div>
                    <div className='form-item'>
                        <p>Recording time:</p>
                        <input type="text" value={time} onChange={(e) => {
                            setTime(e.target.value)
                        }}/>
                    </div>
                    <div className='form-item'>
                        <p>Enter the value of the water used:</p>
                        <input type="number" onChange={setAmountOfWaterFromInput} value={amountOfWater}/>
                    </div>

                    <div>
                        {amountOfWater} ml
                        <button onClick={save}>Save</button>
                    </div>
                </div>
            </ModalContainer>
        </>
    );
};

export default WaterPage;
