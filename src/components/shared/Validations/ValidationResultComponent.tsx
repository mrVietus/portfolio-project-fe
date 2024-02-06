import { Fragment } from "react";
import FailureValidationComponent from "./FailureValidationComponent";
import SuccessValidationComponent from "./SuccessValidationComponent";

type Props = {
    validationType: string;
    validationText: string;
}

function ValidationResultComponent({ validationType, validationText }: Props) {
    let validationResult = <></>;
    switch (validationType) {
        case 'valid':
            validationResult = <SuccessValidationComponent urlValidationText={validationText} />
          break;
        case 'notValid':
            validationResult = <FailureValidationComponent urlValidationText={validationText} />
          break;
        case 'blank':
            validationResult = <></>;
          break;
      }

    return (
        <Fragment>
            { validationResult }
        </Fragment>
    )
}

export default ValidationResultComponent;