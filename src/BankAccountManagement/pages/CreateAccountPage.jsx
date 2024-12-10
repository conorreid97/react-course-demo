import "../styles/Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreateAccountAPI from "../components/CreateAccountAPI"

const CreateAccountPage = () => {
    return (
        <div className="form-center-container">
            <h1>Add Account Form</h1>

            <CreateAccountAPI />
        </div>
    )
   
};

export default CreateAccountPage;