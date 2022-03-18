import { useState } from 'react';
import {
    Wrapper,
    StyledContent,
    StyledStepsContainer,
    StyledStep,
    StyledButtons,
    StyledBackButton,
    StyledHighlightButton,
} from './App.syles';

const stepsData = [
    {
        title: 'Select campaign settings',
        skip: false,
    },
    {
        title: 'Create an ad group',
        skip: false,
    },
    {
        title: 'Create an ad',
        skip: false,
    },
];

function App() {
    const [step, setStep] = useState(1);
    const [finish, setFinish] = useState(false);

    const nextHandler = () => setStep((state) => state + 1);

    const backHandler = () => {
        setStep((state) => state - 1);
        stepsData.filter((item, index) => {
            if (index === step - 2) item.skip = false;
        });
    };

    const skipHandler = () => {
        setStep((state) => state + 1);
        stepsData.filter((item, index) => {
            if (index === step - 1) item.skip = true;
        });
    };

    const finishHandler = () => setFinish(true);

    const resetHandler = () => {
        setFinish(false);
        setStep(1);
        stepsData.map((item) => {
            if (item.skip) item.skip = false;
        });
    };

    return (
        <Wrapper>
            <StyledContent>
                <StyledStepsContainer>
                    {stepsData.map(({ title, skip }, index) => (
                        <StyledStep
                            key={index}
                            isLast={index === stepsData.length - 1}
                            isDone={index + 1 <= step && !skip}
                        >
                            <span>{index + 1}</span>
                            <p>{title}</p>
                        </StyledStep>
                    ))}
                </StyledStepsContainer>

                <p>
                    {finish
                        ? `All steps competed - you're finished`
                        : `Step ${step}`}
                </p>

                <StyledButtons finish={finish}>
                    {!finish && (
                        <StyledBackButton
                            onClick={backHandler}
                            disabled={step === 1}
                            isDisabled={step === 1}
                        >
                            BACK
                        </StyledBackButton>
                    )}

                    {step != stepsData.length && (
                        <div>
                            {step != 1 && (
                                <button onClick={skipHandler}>SKIP</button>
                            )}
                            <StyledHighlightButton onClick={nextHandler}>
                                NEXT
                            </StyledHighlightButton>
                        </div>
                    )}

                    {step === stepsData.length && !finish && (
                        <StyledHighlightButton onClick={finishHandler}>
                            FINISH
                        </StyledHighlightButton>
                    )}

                    {finish && (
                        <StyledHighlightButton onClick={resetHandler}>
                            RESET
                        </StyledHighlightButton>
                    )}
                </StyledButtons>
            </StyledContent>
        </Wrapper>
    );
}

export default App;
