import useCount from '../../hook/useCount';
import * as Icon from 'react-feather';
import { TextInput, Label, Button, Tooltip } from 'flowbite-react';


const CounterApp = () => {
    const { handleSetValue, count, setValue, incrementCount, decrementCount, resetCount, value } = useCount(0);
    return (
        <div className='card'>
            <div className="flex flex-col items-center gap-4">
                <h1 className='text-4xl'>Current Value:</h1>
                <code className='text-5xl'>{count}</code>
            </div>

            <div className="flex justify-center items-center gap-4">
                <Tooltip
                    content="Increment count"
                    placement='top'
                >
                    <Button pill color='blue' onClick={incrementCount}>
                        <Icon.Plus /><Icon.Plus />
                    </Button>
                </Tooltip>

                <Tooltip content="Reset count" placement='top'>
                    <Button pill color='blue' onClick={resetCount}>
                        <Icon.RotateCcw></Icon.RotateCcw>
                    </Button>
                </Tooltip>

                <Tooltip content="Decrement count" placement='top'>
                    <Button pill color='blue' onClick={decrementCount}>
                        <Icon.Minus /><Icon.Minus />
                    </Button>
                </Tooltip>
            </div>

            <form onSubmit={handleSetValue}>
                <Label
                    className='text-xl'
                    htmlFor="small"
                    value="Set Value"
                />
                <div className='flex items-center gap-4'>
                    <TextInput
                        onChange={(e) => setValue(e.target.value)}
                        id="small"
                        sizing="md"
                        type="text"
                        value={value}
                    />
                    <Button type='submit' outline gradientDuoTone="cyanToBlue" size="lg">Set</Button>
                </div>
            </form>

        </div>
    )
}

export default CounterApp;