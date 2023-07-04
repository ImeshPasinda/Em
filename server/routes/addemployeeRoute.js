const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeModel")


router.post("/add/", async (req, res) => {

    const { name, email, age, address, portfolioLink, jobPosition, introduction } = req.body



    try {


        const newEmployee = new Employee({ name, email, age, address, portfolioLink, jobPosition, introduction })
        newEmployee.save()
        res.send('Employee added Successfully!')


    } catch (error) {

        return res.status(400).json({ message: error });
    }
});


router.get("/getallemployees", async (req, res) => {


    try {

        const allEmployees = await Employee.find()
        res.send(allEmployees)

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.delete("/delete/employee/:id", async (req, res) => {

    let employeeId = req.params.id;

    try {

        await Employee.findByIdAndDelete(employeeId)

        res.send('Employee deleted Successfully!')
    }

    catch (error) {


        return res.status(400).json({ message: error });
    }
});

module.exports = router