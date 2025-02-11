const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3012

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/students')
const db = mongoose.connection
db.once('open', ()=>{
    console.log('Mongodb connection successful')
})

const userSchema = new mongoose.Schema({
    Studentdetails: {
        name: String,
        phone: String,
        email: String,
        DOB: Date,
        Gender: String,
        Caste: String,
        Religion: String,
        Aadharno: String,
        BankAccount: String,
        bloodGroup: String,
        photo: String
      },
      AcademicDetails: {
        Course: String,
        Branch: String,
        Section: String,
        Studentid: String,
        AdmissionNumber: String,
        batch: String,
        DOA: Date
      },
      AddressDetails: {
        Country: String,
        State: String,
        District: String,
        City: String,
        Town: String,
        village: String,
        Pincode: String,
        DoorNo: String,
        PermanentAddress: String,
        CorrespondenceAddress: String
      },
      Student1details: {
        Name1: Array,
        SchoolName: String,
        sschallticketno: String,
        Syllabus: String,
        Passed: Number,
        percentage: Number,
        SchoolAddress1: Array,
        sscmarksheet: String
      },
      
      Student2details: {
        Name2: String,
        CollegeName: String,
        diphallticketno: String,
        Syllabus1: String,
        Passed1: Number,
        percentage1: Number,
        collegeAddress: Array,
        diplomaMarksheet: String
      },
      Fatherdetails: {
        FathersName: String,
        FathersMobileNumber: String,
        Aadharno1: String,
        Occupation: String,
        qualification: String,
        email1: String
      },
      Motherdetails: {
        MothersName: String,
        MothersMobileNumber: String,
        Aadharno2: String,
        email2: String,
        Occupation1: String,
        qualification1: String,
        BankAccount1: String
      }

})

const Users = mongoose.model("data", userSchema)


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/post', async (req, res)=>{
    const {name,phone,email,DOB,Gender,Caste,Religion,Aadharno,BankAccount,bloodGroup,photo}=req.body
    const {Course,Branch,Section,Studentid,AdmissionNumber,batch,DOA}=req.body
    const {Country,State,District,City,Town,village,Pincode,DoorNo,PermanentAddress,CorrespondenceAddress}=req.body
    const {Name1,SchoolName,sschallticketno,Syllabus,Passed,percentage,SchoolAddress1,sscmarksheet}=req.body
    const {Name2,CollegeName,diphallticketno,Syllabus1,Passed1,percentage1,collegeAddress,diplomaMarksheet}=req.body
    const {FathersName,FathersMobileNumber,Aadharno1,Occupation,qualification,email1}=req.body
    const {MothersName,MothersMobileNumber,Aadharno2,email2,Occupation1,qualification1,BankAccount1}=req.body
    const user = new Users({
        Studentdetails: {
            name,
            phone,
            email,
            DOB,
            Gender,
            Caste,
            Religion,
            Aadharno,
            BankAccount,
            bloodGroup,
            photo
          },
        AcademicDetails: {
            Course,
            Branch,
            Section,
            Studentid,
            AdmissionNumber,
            batch,
            DOA
          },
          AddressDetails: {
            Country,
            State,
            District,
            City,
            Town,
            village,
            Pincode,
            DoorNo,
            PermanentAddress,
            CorrespondenceAddress
        },
        Student1details: {
            Name1,
            SchoolName,
            sschallticketno,
            Syllabus,
            Passed,
            percentage,
            SchoolAddress1,
            sscmarksheet
        },
        Student2details: {
            Name2,
            CollegeName,
            diphallticketno,
            Syllabus1,
            Passed1,
            percentage1,
            collegeAddress,
            diplomaMarksheet
        },
        Fatherdetails: {
            FathersName,
            FathersMobileNumber,
            Aadharno1,
            Occupation,
            qualification,
            email1
        },
        Motherdetails: {
            MothersName,
            MothersMobileNumber,
            Aadharno2,
            email2,
            Occupation1,
            qualification1,
            BankAccount1
        }

    })
    await user.save()
    console.log(user)
    res.send('Application submitted successfully')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })