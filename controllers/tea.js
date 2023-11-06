// newTea function for post tea route
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"}); // dummy function for now
};
const getTea = (req, res, next) => {
    res.json({message: "Get a cup of tea"}); // dummy function for now
};
module.exports = {newTea,getTea};
