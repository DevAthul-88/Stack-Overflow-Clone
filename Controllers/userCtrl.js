const express = require('express');


module.exports = {
    createANewUser: (req , res) => {
        try {
            res.json("h")
        } catch (error) {
            res.json({error: error.message})
        }
    }
}