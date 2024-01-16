 import axios from  'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from '@mui/material';


export const FormComponent = () => {
    
    const submit = () => {
        console.log("ok");
        alert("הנתונים נשמרים במערכת")

        try {
            console.log("try");

            const response = axios.post('http://localhost:7000');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={(e) => submit()}>
            <label>שם מלא
                <input
                    type="string" 
               />

            </label>
            <label>כתובת
                <input
                    type="string" 
                   />
            </label>
            <label>אימייל
                <input
                    type="mail" />
            </label>
            <Button onClick={submit}>אשר הזמנה</Button>

        </form>
    );
}

