import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ConfirmBooking from "../app/pages/Booking/ConfirmBooking";
import UserSignup from "../app/pages/Authentication/User/UserSignup";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ConfirmBooking">
                <ConfirmBooking/>
            </ComponentPreview>
            <ComponentPreview path="/UserSignup">
                <UserSignup/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews