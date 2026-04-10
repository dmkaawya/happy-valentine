// ===================================================================
// DATA: DOCTORS
// ===================================================================
const doctors = [
    {id:1,name:"Dr. James Wilson",nameSi:"ඩොක්ටර් ජේම්ස් විල්සන්",category:"physician",spec:"Internal Medicine",specSi:"අභ්‍යන්තර වෛද්‍ය විද්‍යාව",qual:"MBBS (Colombo), MD (UK), FRCP",image:"https://picsum.photos/seed/meddoc1/400/400.jpg",exp:"15 years",expSi:"වසර 15",availDays:[1,3,5],avail:"Mon, Wed, Fri",availSi:"සඳු, බදා, සිකු",fee:2500,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Senior physician specializing in complex internal medicine cases.",bioSi:"සංකීර්ණ අභ්‍යන්තර වෛද්‍ය රෝග විශේෂඥයෙක්."},
    {id:2,name:"Dr. Sarah Chen",nameSi:"ඩොක්ටර් සාරා චෙන්",category:"physician",spec:"General Medicine",specSi:"සාමාන්‍ය වෛද්‍ය විද්‍යාව",qual:"MBBS, MD (India), DNB",image:"https://picsum.photos/seed/meddoc2/400/400.jpg",exp:"10 years",expSi:"වසර 10",availDays:[2,4,6],avail:"Tue, Thu, Sat",availSi:"අඟහ, බ්‍රහස්, සෙන",fee:2000,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Expert in diabetes and hypertension management.",bioSi:"දියවැඩියාව සහ අධි රුධිර පීඩන ප්‍රතිකාර ප්‍රවීණයෙක්."},
    {id:3,name:"Dr. Michael Roberts",nameSi:"ඩොක්ටර් මයිකල් රොබට්ස්",category:"psychiatrist",spec:"Clinical Psychiatry",specSi:"වෛද්‍ය මනෝ විද්‍යාව",qual:"MBBS, MD Psychiatry (UK), FRCPsych",image:"https://picsum.photos/seed/meddoc3/400/400.jpg",exp:"20 years",expSi:"වසර 20",availDays:[1,2,3,4],avail:"Mon - Thu",availSi:"සඳු - බ්‍රහස්",fee:3500,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Leading psychiatrist with 20 years in clinical psychiatry.",bioSi:"වෛද්‍ය මනෝ විද්‍යාවේ වසර 20ක ප්‍රවීණයෙක්."},
    {id:4,name:"Dr. Emily Parker",nameSi:"ඩොක්ටර් එමිලි පාකර්",category:"psychiatrist",spec:"Child & Adolescent Psychiatry",specSi:"ළමා හා යෞවන මනෝ වෛද්‍ය විද්‍යාව",qual:"MBBS, DPM, MSc Child Psych (Aus)",image:"https://picsum.photos/seed/meddoc4/400/400.jpg",exp:"12 years",expSi:"වසර 12",availDays:[1,3,5],avail:"Mon, Wed, Fri",availSi:"සඳු, බදා, සිකු",fee:3000,branch:"Kandy",branchSi:"මහනුවර",bio:"Specialist in child and adolescent mental health.",bioSi:"ළමා හා යෞවන මානසික සෞඛ්‍ය විශේෂඥයෙක්."},
    {id:5,name:"Dr. David Kumar",nameSi:"ඩොක්ටර් ඩේවිඩ් කුමාර්",category:"neurologist",spec:"Neurology & Neurophysiology",specSi:"ස්නායු විද්‍යාව හා ස්නායු භෞත විද්‍යාව",qual:"MBBS, DM Neurology (India), FRCP",image:"https://picsum.photos/seed/meddoc5/400/400.jpg",exp:"18 years",expSi:"වසර 18",availDays:[1,2,3,4,5],avail:"Mon - Fri",availSi:"සඳු - සිකු",fee:4000,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Consultant neurologist specializing in stroke and epilepsy.",bioSi:"ස්නායු ආබාධ හා අපසරන රෝග විශේෂඥයෙක්."},
    {id:6,name:"Dr. Anna Silva",nameSi:"ඩොක්ටර් ඇනා සිල්වා",category:"neurologist",spec:"Stroke & Cerebrovascular Medicine",specSi:"ස්නායු ආබාධ හා ස්නායු රුධිර වෛද්‍ය විද්‍යාව",qual:"MBBS, DM Neurology, Fellowship (Singapore)",image:"https://picsum.photos/seed/meddoc6/400/400.jpg",exp:"14 years",expSi:"වසර 14",availDays:[2,4,6],avail:"Tue, Thu, Sat",availSi:"අඟහ, බ්‍රහස්, සෙන",fee:3500,branch:"Galle",branchSi:"ගාල්ල",bio:"Expert in cerebrovascular diseases and stroke rehabilitation.",bioSi:"ස්නායු රුධිර රෝග හා ප්‍රතිසාධන විශේෂඥයෙක්."},
    {id:7,name:"Dr. Ruwan Fernando",nameSi:"ඩොක්ටර් රුවන් ප්‍රනාන්දු",category:"cardiologist",spec:"Interventional Cardiology",specSi:"ප්‍රතියෝජන හෘද වෛද්‍ය විද්‍යාව",qual:"MBBS, MD Cardiology, Fellowship (USA)",image:"https://picsum.photos/seed/meddoc7/400/400.jpg",exp:"16 years",expSi:"වසර 16",availDays:[1,3,5],avail:"Mon, Wed, Fri",availSi:"සඳු, බදා, සිකු",fee:5000,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Leading interventional cardiologist with angioplasty expertise.",bioSi:"ඇන්ජියෝප්ලාස්ටි ප්‍රවීණතාවක් සහිත හෘද විශේෂඥයෙක්."},
    {id:8,name:"Dr. Nimali Perera",nameSi:"ඩොක්ටර් නිමලි පෙරේරා",category:"orthopedic",spec:"Orthopedic Surgery",specSi:"අස්ථි පිළිස්සුම් වෛද්‍ය විද්‍යාව",qual:"MBBS, MS Ortho, Fellowship (UK)",image:"https://picsum.photos/seed/meddoc8/400/400.jpg",exp:"13 years",expSi:"වසර 13",availDays:[2,4,6],avail:"Tue, Thu, Sat",availSi:"අඟහ, බ්‍රහස්, සෙන",fee:4500,branch:"Kandy",branchSi:"මහනුවර",bio:"Specialist in joint replacement and sports injuries.",bioSi:"සන්ධි ප්‍රතිස්ථාපනය හා ක්‍රීඩා ආබාධ විශේෂඥයෙක්."},
    {id:9,name:"Dr. Kamal Jayasuriya",nameSi:"ඩොක්ටර් කමල් ජයසූරිය",category:"pediatrician",spec:"Pediatrics & Neonatology",specSi:"ළමා වෛද්‍ය විද්‍යාව හා නවජන වෛද්‍ය විද්‍යාව",qual:"MBBS, DCH, MD Pediatrics (UK)",image:"https://picsum.photos/seed/meddoc9/400/400.jpg",exp:"11 years",expSi:"වසර 11",availDays:[1,2,3,4,5],avail:"Mon - Fri",availSi:"සඳු - සිකු",fee:2500,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Experienced pediatrician with neonatal intensive care expertise.",bioSi:"නවජන දැඩි ප්‍රතිකාර ප්‍රවීණතාවක් සහිත ළමා වෛද්‍යවරයෙක්."},
    {id:10,name:"Dr. Sunitha Weerasinghe",nameSi:"ඩොක්ටර් සුනිතා වීරසිංහ",category:"surgeon",spec:"General & Laparoscopic Surgery",specSi:"සාමාන්‍ය හා ලැපරස්කෝපික සැත්කම්",qual:"MBBS, MS Surgery, FRCS",image:"https://picsum.photos/seed/meddoc10/400/400.jpg",exp:"17 years",expSi:"වසර 17",availDays:[1,3,5],avail:"Mon, Wed, Fri",availSi:"සඳු, බදා, සිකු",fee:5000,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Senior surgeon specializing in minimally invasive procedures.",bioSi:"අවම ආක්‍රමණ සැත්කම් විශේෂඥ ජ්‍යෙෂ්ඨ ශල්‍ය වෛද්‍යවරියක්."},
    {id:11,name:"Dr. Asanka de Silva",nameSi:"ඩොක්ටර් ආසංක ද සිල්වා",category:"ophthalmologist",spec:"Ophthalmology & Cataract Surgery",specSi:"ඇස් වෛද්‍ය විද්‍යාව හා මුත්‍රාණ්ඩ සැත්කම්",qual:"MBBS, DO, FRCS Ophth",image:"https://picsum.photos/seed/meddoc11/400/400.jpg",exp:"14 years",expSi:"වසර 14",availDays:[2,4,6],avail:"Tue, Thu, Sat",availSi:"අඟහ, බ්‍රහස්, සෙන",fee:3000,branch:"Jaffna",branchSi:"යාපනය",bio:"Eye specialist with expertise in cataract and glaucoma surgery.",bioSi:"මුත්‍රාණ්ඩ හා ග්ලූකෝමා සැත්කම් ප්‍රවීණතාවක් සහිත ඇස් විශේෂඥයෙක්."},
    {id:12,name:"Dr. Chathurika Bandara",nameSi:"ඩොක්ටර් චතුරිකා බණ්ඩාර",category:"ent",spec:"ENT & Head-Neck Surgery",specSi:"කන නාස සහ ගෙල සැත්කම්",qual:"MBBS, MS ENT, DNB",image:"https://picsum.photos/seed/meddoc12/400/400.jpg",exp:"10 years",expSi:"වසර 10",availDays:[1,3,5],avail:"Mon, Wed, Fri",availSi:"සඳු, බදා, සිකු",fee:2500,branch:"Kurunegala",branchSi:"කුරුණෑගල",bio:"ENT specialist with head and neck surgery experience.",bioSi:"කන නාස ගල හා ගෙල සැත්කම් අත්දැකීම් සහිත විශේෂඥයෙක්."},
    {id:13,name:"Dr. Prasanna Wickramasinghe",nameSi:"ඩොක්ටර් ප්‍රසන්න වික්‍රමසිංහ",category:"pulmonologist",spec:"Pulmonology & Respiratory Medicine",specSi:"ශ්වාසන වෛද්‍ය විද්‍යාව",qual:"MBBS, DM Pulmonology, FRCP",image:"https://picsum.photos/seed/meddoc13/400/400.jpg",exp:"15 years",expSi:"වසර 15",availDays:[1,2,4,5],avail:"Mon, Tue, Thu, Fri",availSi:"සඳු, අඟහ, බ්‍රහස්, සිකු",fee:3000,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Pulmonology expert specializing in asthma and COPD.",bioSi:"සෙම්ප්‍රතිශ්‍යාව හා COPD විශේෂඥයෙක්."},
    {id:14,name:"Dr. Indira Rathnayake",nameSi:"ඩොක්ටර් ඉන්දිරා රත්නායක",category:"nephrologist",spec:"Nephrology & Dialysis",specSi:"වකුගඩු වෛද්‍ය විද්‍යාව හා ඩයලිසිස්",qual:"MBBS, DM Nephrology, Fellowship (Aus)",image:"https://picsum.photos/seed/meddoc14/400/400.jpg",exp:"12 years",expSi:"වසර 12",availDays:[1,3,5],avail:"Mon, Wed, Fri",availSi:"සඳු, බදා, සිකු",fee:4000,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Nephrology specialist with dialysis and transplant experience.",bioSi:"ඩයලිසිස් හා ප්‍රතිස්ථාපන අත්දැකීම් සහිත වකුගඩු විශේෂඥයෙක්."},
    {id:15,name:"Dr. Tharanga Gunawardena",nameSi:"ඩොක්ටර් තරංග ගුණවර්ධන",category:"oncologist",spec:"Medical Oncology",specSi:"වෛද්‍ය පිළිකා විද්‍යාව",qual:"MBBS, DM Oncology, Fellowship (UK)",image:"https://picsum.photos/seed/meddoc15/400/400.jpg",exp:"16 years",expSi:"වසර 16",availDays:[1,2,3,4],avail:"Mon - Thu",availSi:"සඳු - බ්‍රහස්",fee:5000,branch:"Colombo Main",branchSi:"කොළඹ ප්‍රධාන",bio:"Medical oncologist specializing in chemotherapy protocols.",bioSi:"කීමෝතෙරපි ප්‍රෝටෝකෝල් වල ප්‍රවීණ පිළිකා විශේෂඥයෙක්."}
];

// ===================================================================
// DATA: BRANCHES
// ===================================================================
const branches = [
    {id:"colombo",name:"Colombo Main",nameSi:"කොළඹ ප්‍රධාන",address:"123 Medical Center Drive, Colombo 07"},
    {id:"kandy",name:"Kandy",nameSi:"මහනුවර",address:"45 Peradeniya Road, Kandy"},
    {id:"galle",name:"Galle",nameSi:"ගාල්ල",address:"78 Matara Road, Galle"},
    {id:"jaffna",name:"Jaffna",nameSi:"යාපනය",address:"12 Hospital Road, Jaffna"},
    {id:"kurunegala",name:"Kurunegala",nameSi:"කුරුණෑගල",address:"56 Negombo Road, Kurunegala"}
];

// ===================================================================
// DATA: SERVICES (30)
// ===================================================================
const services = [
    {icon:"lucide:stethoscope",en:"OPD Consultation",si:"ප්‍රාථමික පරීක්ෂණ"},
    {icon:"lucide:siren",en:"Emergency Care 24/7",si:"හදිසි ප්‍රතිකාර 24/7"},
    {icon:"lucide:test-tubes",en:"Laboratory Tests",si:"පරීක්ෂණාගාර පරීක්ෂණ"},
    {icon:"lucide:scan",en:"X-Ray & Radiology",si:"එක්ස්-රේ හා විකිරණ විද්‍යාව"},
    {icon:"lucide:brain",en:"CT Scan",si:"CT පරිලෝකනය"},
    {icon:"lucide:magnet",en:"MRI Scan",si:"MRI පරිලෝකනය"},
    {icon:"lucide:monitor",en:"Ultrasound",si:"අල්ට්‍රාසවුන්ඩ් පරිලෝකනය"},
    {icon:"lucide:heart-pulse",en:"ECG",si:"ඊ.සී.ජී."},
    {icon:"lucide:activity",en:"Echocardiography",si:"ඊකෝකාඩියෝග්‍රැෆි"},
    {icon:"lucide:droplets",en:"Blood Bank",si:"රුධිර බැංකුව"},
    {icon:"lucide:pill",en:"24/7 Pharmacy",si:"24/7 බෙහෙත් ශාලාව"},
    {icon:"lucide:accessibility",en:"Physiotherapy",si:"ශාරීරික ප්‍රතිකාර"},
    {icon:"lucide:smile",en:"Dental Care",si:"දන්ත සැත්කම්"},
    {icon:"lucide:eye",en:"Eye Surgery",si:"ඇස් සැත්කම්"},
    {icon:"lucide:ear",en:"ENT Surgery",si:"කන නාස ගල සැත්කම්"},
    {icon:"lucide:heart",en:"Cardiac Surgery",si:"හෘද සැත්කම්"},
    {icon:"lucide:bone",en:"Orthopedic Surgery",si:"අස්ථි සැත්කම්"},
    {icon:"lucide:scissors",en:"General Surgery",si:"සාමාන්‍ය සැත්කම්"},
    {icon:"lucide:circle-dot",en:"Laparoscopic Surgery",si:"ලැපරස්කෝපික සැත්කම්"},
    {icon:"lucide:ribbon",en:"Cancer Treatment",si:"පිළිකා ප්‍රතිකාර"},
    {icon:"lucide:filter",en:"Dialysis",si:"ඩයලිසිස්"},
    {icon:"lucide:bed",en:"ICU / CCU",si:"දැඩි සත්කාර ඒකක"},
    {icon:"lucide:baby",en:"Neonatal ICU",si:"නවජන දැඩි සත්කාර"},
    {icon:"lucide:syringe",en:"Vaccination Center",si:"එන්නත් කිරීමේ මධ්‍යස්ථානය"},
    {icon:"lucide:clipboard-check",en:"Health Checkup Packages",si:"සෞඛ්‍ය පරීක්ෂණ පැකේජ්"},
    {icon:"lucide:brain-circuit",en:"Mental Health Counseling",si:"මානසික සෞඛ්‍ය උපදේශනය"},
    {icon:"lucide:apple",en:"Nutrition Counseling",si:"පෝෂණ උපදේශනය"},
    {icon:"lucide:mic",en:"Speech Therapy",si:"කතා ප්‍රතිකාර"},
    {icon:"lucide:ambulance",en:"Ambulance Service",si:"රෝහල් රථ සේවාව"},
    {icon:"lucide:house",en:"Home Care Service",si:"ගෘහස්ථ ප්‍රතිකාර සේවාව"}
];

// ===================================================================
// DATA: CATEGORY LABELS
// ===================================================================
const categoryLabels = {
    en:{all:"All",physician:"Physician",psychiatrist:"Psychiatrist",neurologist:"Neurologist",cardiologist:"Cardiologist",orthopedic:"Orthopedic",pediatrician:"Pediatrician",surgeon:"Surgeon",ophthalmologist:"Ophthalmologist",ent:"ENT",pulmonologist:"Pulmonologist",nephrologist:"Nephrologist",oncologist:"Oncologist"},
    si:{all:"සියල්ල",physician:"වෛද්‍ය",psychiatrist:"මනෝ වෛද්‍ය",neurologist:"ස්නායු විශේෂඥ",cardiologist:"හෘද විශේෂඥ",orthopedic:"අස්ථි විශේෂඥ",pediatrician:"ළමා වෛද්‍ය",surgeon:"ශල්‍ය වෛද්‍ය",ophthalmologist:"ඇස් විශේෂඥ",ent:"කන නාස ගල",pulmonologist:"ශ්වාසන විශේෂඥ",nephrologist:"වකුගඩු විශේෂඥ",oncologist:"පිළිකා විශේෂඥ"}
};

const patientCategories = {
    en:["New Patient","Returning Patient","Follow-up","Emergency Referral"],
    si:["අලුත් රෝගියා","ආපසු එන රෝගියා","පසුගිය පරීක්ෂණය","හදිසි යොමුව"]
};

// ===================================================================
// TRANSLATIONS
// ===================================================================
const T = {
en:{
navHome:"Home",navAbout:"About",navServices:"Services",navChannel:"Channel",navContact:"Contact",
login:"Login",register:"Register",logout:"Logout",dashboard:"Dashboard",myAppointments:"My Appointments",editProfile:"Edit Profile",notifications:"Notifications",
heroBadge:"24/7 Emergency Healthcare",heroTitle:"Your Health, Our Commitment",heroDesc:"Sri Lanka's leading multi-specialty hospital with world-class facilities and expert doctors.",bookAppointment:"Book Appointment",virtualConsult:"Virtual Consultation",
statDoctors:"Doctors",statPatients:"Patients/Month",statBranches:"Branches",statSatisfaction:"Satisfaction",
searchPlaceholder:"Search doctors, services, departments...",search:"Search",
ourDepartments:"Our Departments",deptCardiology:"Cardiology",deptNeurology:"Neurology",deptOrthopedics:"Orthopedics",deptPediatrics:"Pediatrics",deptOphthalmology:"Ophthalmology",deptENT:"ENT",deptGeneral:"General Medicine",deptSurgery:"Surgery",deptOncology:"Oncology",deptPsychiatry:"Psychiatry",deptPulmonology:"Pulmonology",deptNephrology:"Nephrology",
whyChooseUs:"Why Choose MediCare Lanka?",why1Title:"JCI Accredited",why1Desc:"Internationally recognized quality standards.",why2Title:"Expert Specialists",why2Desc:"150+ highly qualified doctors.",why3Title:"24/7 Services",why3Desc:"Round-the-clock emergency and consultation.",why4Title:"Latest Technology",why4Desc:"State-of-the-art medical equipment.",
healthPackages:"Health Check Packages",bookNow:"Book Now",
testimonials:"What Our Patients Say",
insurancePartners:"Insurance Partners",
workingHours:"Working Hours",opdHours:"OPD",opdTime:"Mon-Sat: 8AM - 8PM",sundayTime:"Sunday: 9AM - 1PM",emergHours:"Emergency",emergTime:"24 Hours / 7 Days",pharmHours:"Pharmacy",pharmTime:"Mon-Sat: 7AM - 10PM",labHours:"Laboratory",labTime:"Mon-Sat: 7AM - 8PM",
newsletterTitle:"Subscribe to Health Tips",newsletterDesc:"Get latest health articles delivered to your inbox",subscribe:"Subscribe",
aboutTitle:"About MediCare Lanka",aboutSubtitle:"Leading healthcare provider since 2010",aboutHistory:"Our History",aboutHistoryText:"Founded in 2010, MediCare Lanka is now Sri Lanka's largest private hospital network with 25+ branches and 150+ doctors.",mission:"Our Mission",missionText:"To provide compassionate, affordable, world-class healthcare.",vision:"Our Vision",visionText:"To be the most trusted healthcare institution in South Asia.",coreValues:"Core Values",val1:"Compassion",val2:"Integrity",val3:"Innovation",val4:"Teamwork",val5:"Excellence",val6:"Sustainability",leadership:"Leadership Team",achievements:"Achievements",milestones:"Milestones",partnerships:"Partnerships",communityOutreach:"Community Outreach",communityText:"We conduct free medical camps and health programs across Sri Lanka.",
servicesTitle:"Our Services",servicesSubtitle:"Comprehensive healthcare under one roof",
channelTitle:"Doctor Channeling",channelSubtitle:"Book appointments with specialist doctors",searchDoctorPlaceholder:"Search by doctor name or specialization...",appointment:"Appointment",
contactTitle:"Contact Us",contactSubtitle:"We're here to help you anytime",phoneNumbers:"Phone Numbers",cHotline:"Hotline",cEmergency:"Emergency",cAppointments:"Appointments",cGeneral:"General Inquiries",cBilling:"Billing",cInsurance:"Insurance",cLab:"Laboratory",cPharmacy:"Pharmacy",emailAddresses:"Email Addresses",ceGeneral:"General",ceAppointments:"Appointments",ceEmergency:"Emergency",ceBilling:"Billing",ceHR:"Human Resources",ceMedia:"Media/PR",ceFeedback:"Feedback",socialMedia:"Social Media",ourBranches:"Our Branches",parkingInfo:"Parking",parkingText:"Free parking for 500+ vehicles",accessibility:"Accessibility",accessibilityText:"Wheelchair ramps and lifts available",wifiInfo:"Free WiFi",wifiText:"Complimentary WiFi for all",cafeteria:"Cafeteria",cafeteriaText:"Open 6AM - 10PM, Ground Floor",gpsLocation:"GPS Location",sendUsMessage:"Send Us a Message",cfSubmit:"Send Message",
password:"Password",otp:"OTP",loginIdentifier:"Email / Phone / ID Number / Username",enterOtp:"Enter OTP",sendOtp:"Send OTP",resendOtp:"Resend OTP",rememberMe:"Remember me",forgotPassword:"Forgot Password?",agreeRules:"I agree to the Terms & Conditions",noAccount:"Don't have an account?",registerNow:"Register Now",biometric:"Biometric",faceId:"Face ID",qrLogin:"QR Code",twoFactor:"2FA Available",loginHistory:"Login History",trustedDevices:"Trusted Devices",sessionTimeout:"Session: 30min",
fullName:"Full Name",phone1:"Phone Number 1",phone2:"Phone Number 2",email:"Email",idNumber:"National ID Number",address:"Address",district:"District",selectDistrict:"Select District",age:"Age",gender:"Gender",male:"Male",female:"Female",other:"Other",username:"Username",newPassword:"New Password",agreeTerms:"I agree to the Terms & Conditions and Privacy Policy",haveAccount:"Already have an account?",noAccountFound:"No Account Found",noAccountDesc:"We couldn't find an account. Please register.",viaPhone:"Via Phone",viaEmail:"Via Email",phoneNumber:"Phone Number",backToLogin:"Back to Login",orLoginWith:"Or login with",
wStep1:"Doctor",wStep2:"Schedule",wStep3:"Details",wStep4:"Confirm",wStep5:"Payment",wStep6:"Done",
selectDoctor:"Select a Doctor",selectBranch:"Select Branch",selectDate:"Select Date",selectCategory:"Patient Category",bookForSelf:"Book for Myself",bookForOther:"Book for Someone Else",otherName:"Patient Name",otherPhone:"Patient Phone",otherNIC:"Patient NIC",otherAge:"Patient Age",saveProfile:"Save for Later",nickname:"Nickname",savedProfiles:"Saved Profiles",loginToAutofill:"Logged in - details auto-filled",notLoggedIn:"Not logged in",loginNow:"Login Now",fillManually:"Fill Manually",confirmDetails:"Confirm Details",agreeAgree:"I agree to the Terms & Conditions",moneySummary:"Money Summary",consultationFee:"Consultation Fee",hospitalFee:"Hospital Fee",total:"Total",selectPayment:"Select Payment Method",bankTransfer:"Bank Transfer",cardPayment:"Card Payment",payLater:"Pay at Hospital",bankDetailsTitle:"Bank Details",accountName:"Account Name",accountNumber:"Account Number",bankName:"Bank Name",branchName:"Branch",uploadSlip:"Upload Payment Slip",uploadSlipDesc:"Click or drag to upload receipt",verifyPending:"Verification Pending",verifyPendingDesc:"Your payment is being verified. You will receive SMS, email and dashboard notification once confirmed.",cardNumber:"Card Number",expiryDate:"Expiry Date",cvv:"CVV",cardHolder:"Card Holder Name",processPayment:"Process Payment",payLaterDesc:"Please visit the hospital and make the payment at the counter before your appointment.",bookingConfirmed:"Booking Confirmed!",bookingConfirmedDesc:"Your appointment has been booked successfully. Check your dashboard for details.",bookingRef:"Booking Reference",backToChannel:"Back to Channel",
doctorAvailable:"Doctor is available today",doctorNotAvailable:"Doctor is not available today",currentQueue:"Current Queue Number",yourNumber:"Your Number",estimatedTime:"Estimated Wait",bookedToday:"Booked Today",specialDateRequest:"Request Special Date & Time",
viewProfile:"View",bookBtn:"Book",
dashboardTitle:"My Dashboard",upcomingAppointments:"Upcoming Appointments",recentNotifications:"Recent Notifications",noAppointments:"No appointments found.",noNotifications:"No notifications.",
expLabel:"Experience",availLabel:"Available",feeLabel:"Fee",
days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
footerDesc:"Sri Lanka's leading multi-specialty hospital network since 2010.",quickLinks:"Quick Links",footerServices:"Services",footerContact:"Contact",footerRights:"All rights reserved."
},
si:{
navHome:"මුල් පිටුව",navAbout:"අප ගැන",navServices:"සේවා",navChannel:"චැනලිං",navContact:"සම්බන්ධ කරන්න",
login:"ප්‍රවේශ වන්න",register:"ලියාපදිංචි වන්න",logout:"පිටවන්න",dashboard:"ඩැෂ්බෝඩ්",myAppointments:"මගේ ඇපොයින්ට්මන්ට්",editProfile:"පැතිකඩ සංස්කරණය",notifications:"දැනුම්දීම්",
heroBadge:"24/7 හදිසි සෞඛ්‍ය සේවාව",heroTitle:"ඔබේ සෞඛ්‍යය, අපගේ වගකීම",heroDesc:"ලෝක මට්ටමේ පහසුකම් සහ විශේෂඥ වෛද්‍යවරුන් සහිත ශ්‍රී ලංකාවේ ප්‍රධාන රෝහල.",bookAppointment:"ඇපොයින්ට්මන්ට් වෙන්කරන්න",virtualConsult:"අන්තර්ජාල උපදේශනය",
statDoctors:"වෛද්‍යවරුන්",statPatients:"රෝගීන්/මාසයකට",statBranches:"ශාඛා",statSatisfaction:"සතුටුමතාව",
searchPlaceholder:"වෛද්‍යවරුන්, සේවා, දෙපාර්තමේන්තු සොයන්න...",search:"සොයන්න",
ourDepartments:"අපගේ දෙපාර්තමේන්තු",deptCardiology:"හෘද වෛද්‍ය",deptNeurology:"ස්නායු වෛද්‍ය",deptOrthopedics:"අස්ථි වෛද්‍ය",deptPediatrics:"ළමා වෛද්‍ය",deptOphthalmology:"ඇස් වෛද්‍ය",deptENT:"කන නාස ගල",deptGeneral:"සාමාන්‍ය වෛද්‍ය",deptSurgery:"ශල්‍ය වෛද්‍ය",deptOncology:"පිළිකා වෛද්‍ය",deptPsychiatry:"මනෝ වෛද්‍ය",deptPulmonology:"ශ්වාසන වෛද්‍ය",deptNephrology:"වකුගඩු වෛද්‍ය",
whyChooseUs:"මෙඩිකේයාර් ලංකා තෝරන්න ඇයි?",why1Title:"JCI ප්‍රමාණීකරණය",why1Desc:"ජාත්‍යන්තර තත්ත්ව ප්‍රමිතීන්.",why2Title:"විශේෂඥ වෛද්‍යවරුන්",why2Desc:"150+ ප්‍රවීණ වෛද්‍යවරුන්.",why3Title:"24/7 සේවා",why3Desc:"දිගුන්නා හදිසි සහ උපදේශන.",why4Title:"නවීන තාක්ෂණය",why4Desc:"නවීනතම වෛද්‍ය උපකරණ.",
healthPackages:"සෞඛ්‍ය පරීක්ෂණ පැකේජ්",bookNow:"දැන් වෙන්කරන්න",
testimonials:"අපගේ රෝගීන් කියන දේවල්",
insurancePartners:"රක්ෂණ හවුල්කරුවන්",
workingHours:"වැඩ කරන කාලය",opdHours:"ප්‍රාථමික",opdTime:"සඳු-සෙන: පෙ.ව. 8 - ප.ව. 8",sundayTime:"ඉරිදා: පෙ.ව. 9 - ප.ව. 1",emergHours:"හදිසි",emergTime:"24 පැය / 7 දින",pharmHours:"බෙහෙත් ශාලාව",pharmTime:"සඳු-සෙන: පෙ.ව. 7 - ප.ව. 10",labHours:"පරීක්ෂණාගාරය",labTime:"සඳු-සෙන: පෙ.ව. 7 - ප.ව. 8",
newsletterTitle:"සෞඛ්‍ය ඉඟි ලබාගන්න",newsletterDesc:"නවතම සෞඛ්‍ය ලිපි ලබාගන්න",subscribe:"දාන්න",
aboutTitle:"මෙඩිකේයාර් ලංකා ගැන",aboutSubtitle:"2010 සිට ප්‍රධාන සෞඛ්‍ය සේවා සපයන්නෙක්",aboutHistory:"අපගේ ඉතිහාසය",aboutHistoryText:"2010 දී ආරම්භ කරන ලද මෙඩිකේයාර් ලංකා දැන් ශාඛා 25+ ක් සහ වෛද්‍යවරුන් 150+ ක් සහිත ශ්‍රී ලංකාවේ විශාලතම පෞද්ගලික රෝහල් ජාලයයි.",mission:"අපගේ මිෂනය",missionText:"කරුණාවන්ත, දැරිය හැකි, ලෝක මට්ටමේ සෞඛ්‍ය සේවා සපයන්න.",vision:"අපගේ දර්ශනය",visionText:"දකුණු ආසියාවේ වඩාත්ම විශ්වාසදායක සෞඛ්‍ය ආයතනය වීම.",coreValues:"ප්‍රධාන වටිනාකම්",val1:"කරුණාව",val2:"අඛණ්ඩතාව",val3:"නව්‍යකරණය",val4:"කණ්ඩායම් කටයුතු",val5:"විශිෂ්ටත්වය",val6:"ස්ථාවරත්වය",leadership:"නායකත්ව කණ්ඩායම",achievements:"සාධනයන්",milestones:"සන්ධිස්ථාන",partnerships:"හවුල්කාරිත්වයන්",communityOutreach:"සමාජ සේවා",communityText:"අප ශ්‍රී ලංකාව පුරා නොමිලේ වෛද්‍ය කඳවුරු සහ සෞඛ්‍ය වැඩසටහන් පවත්වයි.",
servicesTitle:"අපගේ සේවා",servicesSubtitle:"එක් වහලක් යටතේ සම්පූර්ණ සෞඛ්‍ය සේවා",
channelTitle:"වෛද්‍ය චැනලිං",channelSubtitle:"විශේෂඥ වෛද්‍යවරුන්ට ඇපොයින්ට්මන්ට් වෙන්කරන්න",searchDoctorPlaceholder:"වෛද්‍ය නම හෝ විශේෂතාව සොයන්න...",appointment:"ඇපොයින්ට්මන්ට්",
contactTitle:"සම්බන්ධ කරන්න",contactSubtitle:"අපි ඕනෑම වෙලාවක උදව් කරන්නවා",phoneNumbers:"දුරකථන අංක",cHotline:"හොට්ලයින්",cEmergency:"හදිසි",cAppointments:"ඇපොයින්ට්මන්ට්",cGeneral:"සාමාන්‍ය විමසීම්",cBilling:"බිල්පත්",cInsurance:"රක්ෂණ",cLab:"පරීක්ෂණාගාරය",cPharmacy:"බෙහෙත් ශාලාව",emailAddresses:"ඊමේල් ලිපින්",ceGeneral:"සාමාන්‍ය",ceAppointments:"ඇපොයින්ට්මන්ට්",ceEmergency:"හදිසි",ceBilling:"බිල්පත්",ceHR:"මානව සම්පත්ති",ceMedia:"මාධ්‍ය/PR",ceFeedback:"ප්‍රතිචාර",socialMedia:"සමාජ මාධ්‍ය",ourBranches:"අපගේ ශාඛා",parkingInfo:"පාර්කිං",parkingText:"වාහන 500+ සඳහා නොමිලේ පාර්කිං",accessibility:"ප්‍රවේශ්‍යතාව",accessibilityText:"විලන්චෙයාර් දුම්රිය සහ ලිෆ්ට් ඇත",wifiInfo:"නොමිලේ WiFi",wifiText:"සියලුම අයට නොමිලේ WiFi",cafeteria:"කෑන්ටීනා",cafeteriaText:"පෙ.ව. 6 - ප.ව. 10, පළමු මහල",gpsLocation:"GPS ස්ථානය",sendUsMessage:"අපට පණිවිඩයක් එවන්න",cfSubmit:"පණිවිඩය එවන්න",
password:"මුරපදය",otp:"OTP",loginIdentifier:"ඊමේල් / දුරකථන / අනන්‍යතා අංකය / පරිශීලක නාමය",enterOtp:"OTP ඇතුළත් කරන්න",sendOtp:"OTP එවන්න",resendOtp:"ආයේ OTP එවන්න",rememberMe:"මතක තබාගන්න",forgotPassword:"මුරපදය මතක නැද්ද?",agreeRules:"මම නියම හා කොන්දේසි වලට එකඟයි",noAccount:"ගිණුමක් නැද්ද?",registerNow:"දැන් ලියාපදිංචි වන්න",biometric:"ජෛවමිතික",faceId:"Face ID",qrLogin:"QR කේතය",twoFactor:"2FA ඇත",loginHistory:"ප්‍රවේශ ඉතිහාසය",trustedDevices:"විශ්වාසදායක උපාංග",sessionTimeout:"සැසිය: 30මි.",
fullName:"මුලු නම",phone1:"දුරකථන අංකය 1",phone2:"දුරකථන අංකය 2",email:"ඊමේල්",idNumber:"ජාතික හැඳුනුම්පත් අංකය",address:"ලිපිනය",district:"දිස්ත්‍රික්කය",selectDistrict:"දිස්ත්‍රික්කය තෝරන්න",age:"වයස",gender:"ස්ත්‍රී පුරුෂ භාවය",male:"පුරුෂ",female:"ස්ත්‍රී",other:"වෙනත්",username:"පරිශීලක නාමය",newPassword:"නව මුරපදය",agreeTerms:"මම නියම හා පෞද්ගලිකතා ප්‍රතිපත්තියට එකඟයි",haveAccount:"දැනටම ගිණුමක් තියේද?",noAccountFound:"ගිණුමක් හමු නොවීය",noAccountDesc:"ගිණුමක් සොයාගත නොහැකි විය. කරුණාකර ලියාපදිංචි වන්න.",viaPhone:"දුරකථනයෙන්",viaEmail:"ඊමේල් මගින්",phoneNumber:"දුරකථන අංකය",backToLogin:"ප්‍රවේශයට ආපසු",orLoginWith:"හෝ මෙම මගින් ප්‍රවේශ වන්න",
wStep1:"වෛද්‍ය",wStep2:"කාලසටහන",wStep3:"විස්තර",wStep4:"තහවුරු",wStep5:"ගෙවීම",wStep6:"අවසන්",
selectDoctor:"වෛද්‍යවරයෙකු තෝරන්න",selectBranch:"ශාඛාව තෝරන්න",selectDate:"දිනය තෝරන්න",selectCategory:"රෝගි ප්‍රවර්ගය",bookForSelf:"මට වෙන්කරන්න",bookForOther:"වෙනත් කෙනෙකුට වෙන්කරන්න",otherName:"රෝගියාගේ නම",otherPhone:"රෝගියාගේ දුරකථනය",otherNIC:"රෝගියාගේ අනන්‍යතා අංකය",otherAge:"රෝගියාගේ වයස",saveProfile:"පසුව සඳහා සුරකින්න",nickname:"අන්වර්ත නාමය",savedProfiles:"සුරැකි පැතිකඩ",loginToAutofill:"ප්‍රවේශ වී ඇත - විස්තර ස්වයංක්‍රීයව පිරවීය",notLoggedIn:"ප්‍රවේශ වී නැත",loginNow:"දැන් ප්‍රවේශ වන්න",fillManually:"අතින් පුරවන්න",confirmDetails:"විස්තර තහවුරු කරන්න",agreeAgree:"මම නියම හා කොන්දේසි වලට එකඟයි",moneySummary:"මුදල් සාරාංශය",consultationFee:"උපදේශන ගාස්තුව",hospitalFee:"රෝහල් ගාස්තුව",total:"එකතුව",selectPayment:"ගෙවීම් ක්‍රමය තෝරන්න",bankTransfer:"බැංකු හුවමාරුව",cardPayment:"කාඩ් ගෙවීම",payLater:"රෝහලේදී ගෙවන්න",bankDetailsTitle:"බැංකු විස්තර",accountName:"ගිණුම් නාමය",accountNumber:"ගිණුම් අංකය",bankName:"බැංකුව",branchName:"ශාඛාව",uploadSlip:"ගෙවීම් රිසිට් උඩුගත කරන්න",uploadSlipDesc:"ක්ලික් කරන්න හෝ රිසිට් එක ඇදගෙන එන්න",verifyPending:"සත්‍යාපනය පැනවී ඇත",verifyPendingDesc:"ඔබගේ ගෙවීම සත්‍යාපනය කෙරේ. SMS, ඊමේල් සහ ඩැෂ්බෝඩ් දැනුම්දීමක් ලැබේ.",cardNumber:"කාඩ් අංකය",expiryDate:"කල් ඉකුත් දිනය",cvv:"CVV",cardHolder:"කාඩ් දරන්නාගේ නම",processPayment:"ගෙවීම සිදු කරන්න",payLaterDesc:"කරුණාකර ඔබගේ ඇපොයින්ට්මන්ට් එකට පෙර රෝහලට පැමිණ කවුන්ටරයේ ගෙවන්න.",bookingConfirmed:"ඇපොයින්ට්මන්ට් තහවුරු විය!",bookingConfirmedDesc:"ඔබගේ ඇපොයින්ට්මන්ට් සාර්ථකව වෙන්කර ඇත.",bookingRef:"ඇපොයින්ට්මන්ට් යොමුව",backToChannel:"චැනලිං වෙත ආපසු",
doctorAvailable:"වෛද්‍යවරයා අද ලබාගත හැක",doctorNotAvailable:"වෛද්‍යවරයා අද නොමැත",currentQueue:"වත්මන් පෝලිම් අංකය",yourNumber:"ඔබගේ අංකය",estimatedTime:"ඇස්තමේන්ත පැය",bookedToday:"අද වෙන්කර ඇත",specialDateRequest:"විශේෂ දිනය හා වේලාව ඉල්ලන්න",
viewProfile:"බලන්න",bookBtn:"වෙන්කරන්න",
dashboardTitle:"මගේ ඩැෂ්බෝඩ්",upcomingAppointments:"ඉදිරි ඇපොයින්ට්මන්ට්",recentNotifications:"මෑත දැනුම්දීම්",noAppointments:"ඇපොයින්ට්මන්ට් නැත.",noNotifications:"දැනුම්දීම් නැත.",
expLabel:"අත්දැකීම",availLabel:"ලබාගත හැක",feeLabel:"ගාස්තුව",
days:["ඉරි","සඳු","අඟහ","බදා","බ්‍රහස්","සිකු","සෙන"],daysFull:["ඉරිදා","සඳුදා","අඟහරාවාරියාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],
months:["ජන","පෙබ","මාර්","අප්‍රේල්","මැයි","ජූනි","ජූලි","අගෝ","සැප්","ඔක්","නොවැ","දෙසැ"],
footerDesc:"2010 සිට ශ්‍රී ලංකාවේ ප්‍රධාන රෝහල් ජාලය.",quickLinks:"ඉක්මන් සබැඳි",footerServices:"සේවා",footerContact:"සම්බන්ධ",footerRights:"සියලු හිමිකම් රක්ෂිතයි."
}
};

// ===================================================================
// STATE
// ===================================================================
let lang = localStorage.getItem('ml_lang') || 'en';
let theme = localStorage.getItem('ml_theme') || 'light';
let currentUser = JSON.parse(localStorage.getItem('ml_user')) || null;
let users = JSON.parse(localStorage.getItem('ml_users')) || [];
let appointments = JSON.parse(localStorage.getItem('ml_appointments')) || [];
let userNotifications = JSON.parse(localStorage.getItem('ml_notifs_' + (currentUser?.id || '0'))) || [];
let savedProfiles = JSON.parse(localStorage.getItem('ml_saved_profiles_' + (currentUser?.id || '0'))) || [];
let wizardStep = 1;
let wizardData = {};
let loginMethod = 'password';
let forgotMethod = 'phone';
let channelFilter = 'all';
let channelSearch = '';
let loginOtpSent = false;
let forgotOtpSent = false;
let currentOtp = '';
let otpTimerInterval = null;

function t(key) { return (T[lang] && T[lang][key]) || (T.en[key]) || key; }
function docName(d) { return lang === 'si' ? d.nameSi : d.name; }
function docSpec(d) { return lang === 'si' ? d.specSi : d.spec; }
function docExp(d) { return lang === 'si' ? d.expSi : d.exp; }
function docAvail(d) { return lang === 'si' ? d.availSi : d.avail; }
function docBranch(d) { return lang === 'si' ? d.branchSi : d.branch; }
function docBio(d) { return lang === 'si' ? d.bioSi : d.bio; }

// ===================================================================
// INIT
// ===================================================================
function init() {
    applyTheme(theme);
    applyLanguage(lang);
    updateAuthUI();
    renderServices();
    navigateTo('home');
    setupOtpInputs();
}

// ===================================================================
// THEME
// ===================================================================
function applyTheme(t) {
    theme = t;
    document.documentElement.classList.toggle('dark', t === 'dark');
    localStorage.setItem('ml_theme', t);
}
document.getElementById('themeToggle').onclick = () => applyTheme(theme === 'light' ? 'dark' : 'light');

// ===================================================================
// LANGUAGE
// ===================================================================
function applyLanguage(l) {
    lang = l;
    document.documentElement.lang = l === 'si' ? 'si' : 'en';
    document.getElementById('currentLangLabel').textContent = l === 'en' ? 'EN' : 'සි';
    document.querySelectorAll('.lang-option').forEach(o => o.classList.toggle('active', o.dataset.lang === l));
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (T[l][k]) el.textContent = T[l][k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (T[l][k]) el.placeholder = T[l][k];
    });
    renderServices();
    if (document.getElementById('page-channel').classList.contains('active')) renderChannelPage();
    localStorage.setItem('ml_lang', l);
}
document.getElementById('langBtn').onclick = (e) => { e.stopPropagation(); document.getElementById('langDropdown').classList.toggle('open'); };
document.querySelectorAll('.lang-option').forEach(o => o.onclick = () => { applyLanguage(o.dataset.lang); document.getElementById('langDropdown').classList.remove('open'); });
document.addEventListener('click', e => { if (!document.getElementById('langSwitcher').contains(e.target)) document.getElementById('langDropdown').classList.remove('open'); });

// ===================================================================
// NAVIGATION (SPA)
// ===================================================================
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (el) el.classList.add('active');
    document.querySelectorAll('[data-page]').forEach(a => a.classList.toggle('active', a.dataset.page === page));
    document.getElementById('mobileMenu').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'channel') renderChannelPage();
    if (page === 'dashboard') renderDashboard();
    if (page === 'appointments') renderAllAppointments();
    return false;
}
document.querySelectorAll('[data-page]').forEach(a => a.onclick = (e) => { e.preventDefault(); navigateTo(a.dataset.page); });
document.getElementById('hamburger').onclick = () => document.getElementById('mobileMenu').classList.toggle('open');

// ===================================================================
// AUTH UI
// ===================================================================
function updateAuthUI() {
    const loginBtn = document.getElementById('navLoginBtn');
    const userMenu = document.getElementById('userMenu');
    if (currentUser) {
        loginBtn.style.display = 'none';
        userMenu.style.display = 'block';
        document.getElementById('userAvatar').textContent = currentUser.fullName.charAt(0).toUpperCase();
        document.getElementById('userDisplayName').textContent = currentUser.fullName.split(' ')[0];
        userNotifications = JSON.parse(localStorage.getItem('ml_notifs_' + currentUser.id)) || [];
        savedProfiles = JSON.parse(localStorage.getItem('ml_saved_profiles_' + currentUser.id)) || [];
        const badge = document.getElementById('notifBadge');
        badge.textContent = userNotifications.length;
        badge.style.display = userNotifications.length > 0 ? 'flex' : 'none';
    } else {
        loginBtn.style.display = 'flex';
        userMenu.style.display = 'none';
    }
}
document.getElementById('userMenuBtn').onclick = (e) => { e.stopPropagation(); document.getElementById('userDropdown').classList.toggle('open'); };
document.addEventListener('click', e => { if (!document.getElementById('userMenu').contains(e.target)) document.getElementById('userDropdown').classList.remove('open'); });

// ===================================================================
// AUTH MODAL
// ===================================================================
function openAuthModal(tab) {
    if (tab === 'profile' && !currentUser) { tab = 'login'; }
    if (tab === 'profile') { renderProfileTab(); }
    showAuthTab(tab);
    document.getElementById('authModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeAuthModal() {
    document.getElementById('authModal').classList.remove('open');
    document.body.style.overflow = '';
    clearOtpTimers();
}
function showAuthTab(tab) {
    ['Login', 'Register', 'Forgot', 'Profile', 'NoAccount'].forEach(t => {
        document.getElementById('auth' + t + 'Tab').style.display = 'none';
    });
    const map = { login: 'Login', register: 'Register', forgot: 'Forgot', profile: 'Profile', noaccount: 'NoAccount' };
    document.getElementById('auth' + map[tab] + 'Tab').style.display = 'block';
}

// ===================================================================
// LOGIN METHODS
// ===================================================================
function switchLoginMethod(method) {
    loginMethod = method;
    loginOtpSent = false;
    document.getElementById('methodPassword').classList.toggle('active', method === 'password');
    document.getElementById('methodOtp').classList.toggle('active', method === 'otp');
    document.getElementById('loginPasswordGroup').style.display = method === 'password' ? '' : 'none';
    document.getElementById('loginOtpGroup').style.display = method === 'otp' ? '' : 'none';
    if (method === 'otp') {
        document.getElementById('loginSendOtpBtn').style.display = '';
        document.getElementById('loginResendOtp').style.display = 'none';
        document.getElementById('loginOtpTimer').textContent = '';
        document.querySelectorAll('#loginOtpInputs .otp-digit').forEach(i => i.value = '');
    }
}

function findUser(identifier) {
    const id = identifier.toLowerCase().trim();
    return users.find(u =>
        u.email.toLowerCase() === id ||
        u.phone1 === id || u.phone2 === id ||
        u.idNumber.toLowerCase() === id ||
        u.username.toLowerCase() === id
    );
}

function sendOtp(context) {
    const identifier = context === 'login' ? document.getElementById('loginIdentifier').value.trim() : (forgotMethod === 'phone' ? document.getElementById('forgotPhone').value.trim() : document.getElementById('forgotEmail').value.trim());
    if (!identifier) { showToast('Please enter identifier', 'error'); return; }
    currentOtp = String(Math.floor(100000 + Math.random() * 900000));
    showToast(t('sendOtp') + ': ' + currentOtp, 'info', true);
    if (context === 'login') {
        loginOtpSent = true;
        document.getElementById('loginSendOtpBtn').style.display = 'none';
        startOtpTimer('loginOtpTimer', 'loginResendOtp', () => sendOtp('login'));
    } else {
        forgotOtpSent = true;
        document.getElementById('forgotSubmitBtn').textContent = t('enterOtp');
        startOtpTimer('loginOtpTimer', 'loginResendOtp', () => sendOtp('forgot'));
    }
}

function startOtpTimer(timerId, resendId, resendFn) {
    clearOtpTimers();
    let sec = 60;
    const timerEl = document.getElementById(timerId);
    const resendEl = document.getElementById(resendId);
    if (timerEl) timerEl.textContent = sec + 's';
    if (resendEl) resendEl.style.display = 'none';
    otpTimerInterval = setInterval(() => {
        sec--;
        if (timerEl) timerEl.textContent = sec + 's';
        if (sec <= 0) {
            clearInterval(otpTimerInterval);
            if (timerEl) timerEl.textContent = '';
            if (resendEl) resendEl.style.display = '';
        }
    }, 1000);
}
function clearOtpTimers() { if (otpTimerInterval) { clearInterval(otpTimerInterval); otpTimerInterval = null; } }

function getOtpValue(containerId) {
    const digits = document.querySelectorAll('#' + containerId + ' .otp-digit');
    return Array.from(digits).map(d => d.value).join('');
}

function handleLogin() {
    const identifier = document.getElementById('loginIdentifier').value.trim();
    const rulesChecked = document.getElementById('agreeRules').checked;
    if (!identifier) { showToast('Please enter identifier', 'error'); return; }
    if (loginMethod === 'password') {
        if (!rulesChecked) { showToast('Please agree to Terms & Conditions', 'error'); return; }
        const pw = document.getElementById('loginPassword').value;
        if (!pw) { showToast('Please enter password', 'error'); return; }
        const user = findUser(identifier);
        if (!user) { showAuthTab('noaccount'); return; }
        if (user.password !== pw) { showToast('Incorrect password', 'error'); return; }
        loginUser(user);
    } else {
        if (!loginOtpSent) { showToast('Please send OTP first', 'error'); return; }
        const entered = getOtpValue('loginOtpInputs');
        if (entered !== currentOtp) { showToast('Invalid OTP', 'error'); return; }
        const user = findUser(identifier);
        if (!user) { showAuthTab('noaccount'); return; }
        loginUser(user);
    }
}

function loginUser(user) {
    currentUser = user;
    localStorage.setItem('ml_user', JSON.stringify(user));
    closeAuthModal();
    updateAuthUI();
    showToast('Welcome, ' + user.fullName + '!', 'success');
    addNotification('Logged in successfully from ' + new Date().toLocaleString());
}

function logoutUser() {
    addNotification('Logged out');
    currentUser = null;
    localStorage.removeItem('ml_user');
    updateAuthUI();
    navigateTo('home');
    document.getElementById('userDropdown').classList.remove('open');
    showToast('Logged out', 'info');
}

// ===================================================================
// REGISTER
// ===================================================================
function handleRegister() {
    const fullName = document.getElementById('regFullName').value.trim();
    const phone1 = document.getElementById('regPhone1').value.trim();
    const phone2 = document.getElementById('regPhone2').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const idNumber = document.getElementById('regIdNumber').value.trim();
    const address = document.getElementById('regAddress').value.trim();
    const district = document.getElementById('regDistrict').value;
    const age = document.getElementById('regAge').value;
    const genderEl = document.querySelector('input[name="regGender"]:checked');
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    const agree = document.getElementById('regAgree').checked;

    if (!fullName || !phone1 || !email || !idNumber || !address || !district || !age || !genderEl || !username || !password) { showToast('Please fill all required fields', 'error'); return; }
    if (password.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }
    if (!agree) { showToast('Please agree to Terms & Conditions', 'error'); return; }
    if (users.find(u => u.email === email || u.username === username || u.idNumber === idNumber)) { showToast('Email, username or ID already registered', 'error'); return; }

    const user = { id: 'U' + Date.now(), fullName, phone1, phone2, email, idNumber, address, district, age: parseInt(age), gender: genderEl.value, username, password, createdAt: new Date().toISOString() };
    users.push(user);
    localStorage.setItem('ml_users', JSON.stringify(users));
    showToast('Registration successful! Please login.', 'success');
    showAuthTab('login');
    document.getElementById('loginIdentifier').value = email;
}

function checkPasswordStrength(pw) {
    const bar = document.getElementById('pwStrength');
    if (!bar) return;
    let s = 0; if (pw.length >= 6) s++; if (pw.length >= 10) s++; if (/[A-Z]/.test(pw)) s++; if (/[0-9]/.test(pw)) s++; if (/[^A-Za-z0-9]/.test(pw)) s++;
    const colors = ['#DC2626', '#D97706', '#F59E0B', '#059669', '#059669'];
    const widths = ['20%', '40%', '60%', '80%', '100%'];
    bar.innerHTML = '<div class="pw-strength-bar" style="width:' + widths[s - 1] + ';background:' + (colors[s - 1] || '#CBD5E1') + '"></div>';
}

function togglePwVisibility(inputId, btn) {
    const inp = document.getElementById(inputId);
    const isP = inp.type === 'password';
    inp.type = isP ? 'text' : 'password';
    btn.querySelector('iconify-icon').setAttribute('icon', isP ? 'lucide:eye-off' : 'lucide:eye');
}

// ===================================================================
// FORGOT PASSWORD
// ===================================================================
function showForgotPassword() { showAuthTab('forgot'); forgotOtpSent = false; }
function switchForgotMethod(m) {
    forgotMethod = m;
    forgotOtpSent = false;
    document.getElementById('forgotPhoneMethod').classList.toggle('active', m === 'phone');
    document.getElementById('forgotEmailMethod').classList.toggle('active', m === 'email');
    document.getElementById('forgotPhoneGroup').style.display = m === 'phone' ? '' : 'none';
    document.getElementById('forgotEmailGroup').style.display = m === 'email' ? '' : 'none';
    document.getElementById('forgotOtpGroup').style.display = 'none';
    document.getElementById('forgotNewPwGroup').style.display = 'none';
    document.getElementById('forgotSubmitBtn').textContent = t('submit');
}
function handleForgotPassword() {
    if (!forgotOtpSent) {
        const id = forgotMethod === 'phone' ? document.getElementById('forgotPhone').value.trim() : document.getElementById('forgotEmail').value.trim();
        if (!id) { showToast('Please enter ' + (forgotMethod === 'phone' ? 'phone number' : 'email'), 'error'); return; }
        const user = forgotMethod === 'phone' ? users.find(u => u.phone1 === id || u.phone2 === id) : users.find(u => u.email.toLowerCase() === id.toLowerCase());
        if (!user) { showToast('No account found with this ' + (forgotMethod === 'phone' ? 'phone number' : 'email'), 'error'); return; }
        currentOtp = String(Math.floor(100000 + Math.random() * 900000));
        showToast('OTP: ' + currentOtp, 'info', true);
        forgotOtpSent = true;
        document.getElementById('forgotOtpGroup').style.display = '';
        document.getElementById('forgotSubmitBtn').textContent = t('enterOtp');
        startOtpTimer('loginOtpTimer', 'loginResendOtp', () => handleForgotPassword());
    } else if (document.getElementById('forgotNewPwGroup').style.display === 'none') {
        const entered = getOtpValue('forgotOtpInputs');
        if (entered !== currentOtp) { showToast('Invalid OTP', 'error'); return; }
        document.getElementById('forgotOtpGroup').style.display = 'none';
        document.getElementById('forgotNewPwGroup').style.display = '';
        document.getElementById('forgotSubmitBtn').textContent = t('submit');
    } else {
        const newPw = document.getElementById('forgotNewPassword').value;
        if (!newPw || newPw.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }
        const id = forgotMethod === 'phone' ? document.getElementById('forgotPhone').value.trim() : document.getElementById('forgotEmail').value.trim();
        const user = forgotMethod === 'phone' ? users.find(u => u.phone1 === id || u.phone2 === id) : users.find(u => u.email.toLowerCase() === id.toLowerCase());
        if (user) {
            user.password = newPw;
            localStorage.setItem('ml_users', JSON.stringify(users));
            showToast('Password reset successful! Please login.', 'success');
            showAuthTab('login');
        }
    }
}

// ===================================================================
// PROFILE TAB
// ===================================================================
function renderProfileTab() {
    if (!currentUser) return;
    document.getElementById('profileForm').innerHTML = `
        <div class="form-group"><label>${t('fullName')}</label><input type="text" id="profName" value="${currentUser.fullName}"></div>
        <div class="form-row-2"><div class="form-group"><label>${t('phone1')}</label><input type="tel" id="profPhone1" value="${currentUser.phone1}"></div><div class="form-group"><label>${t('phone2')}</label><input type="tel" id="profPhone2" value="${currentUser.phone2 || ''}"></div></div>
        <div class="form-group"><label>${t('email')}</label><input type="email" id="profEmail" value="${currentUser.email}"></div>
        <div class="form-group"><label>${t('idNumber')}</label><input type="text" id="profId" value="${currentUser.idNumber}" readonly style="opacity:0.6"></div>
        <div class="form-group"><label>${t('address')}</label><input type="text" id="profAddr" value="${currentUser.address}"></div>
        <div class="form-row-2"><div class="form-group"><label>${t('district')}</label><select id="profDist">${districts.map(d => '<option' + (d === currentUser.district ? ' selected' : '') + '>' + d + '</option>').join('')}</select></div><div class="form-group"><label>${t('age')}</label><input type="number" id="profAge" value="${currentUser.age}"></div></div>
        <button class="btn-primary-full" onclick="saveProfile()">${t('editProfile')}</button>
    `;
}
const districts = ['Colombo','Gampaha','Kalutara','Kandy','Matale','Nuwara Eliya','Galle','Matara','Hambantota','Jaffna','Kilinochchi','Mannar','Mullaitivu','Vavuniya','Trincomalee','Batticaloa','Ampara','Kurunegala','Puttalam','Anuradhapura','Polonnaruwa','Badulla','Monaragala','Ratnapura','Kegalle'];
function saveProfile() {
    currentUser.fullName = document.getElementById('profName').value;
    currentUser.phone1 = document.getElementById('profPhone1').value;
    currentUser.phone2 = document.getElementById('profPhone2').value;
    currentUser.email = document.getElementById('profEmail').value;
    currentUser.address = document.getElementById('profAddr').value;
    currentUser.district = document.getElementById('profDist').value;
    currentUser.age = parseInt(document.getElementById('profAge').value);
    localStorage.setItem('ml_user', JSON.stringify(currentUser));
    const idx = users.findIndex(u => u.id === currentUser.id);
    if (idx >= 0) { users[idx] = currentUser; localStorage.setItem('ml_users', JSON.stringify(users)); }
    updateAuthUI();
    showToast('Profile updated', 'success');
    closeAuthModal();
}

// ===================================================================
// OTP INPUTS BEHAVIOR
// ===================================================================
function setupOtpInputs() {
    document.querySelectorAll('.otp-inputs').forEach(container => {
        const digits = container.querySelectorAll('.otp-digit');
        digits.forEach((d, i) => {
            d.addEventListener('input', () => { if (d.value && i < digits.length - 1) digits[i + 1].focus(); });
            d.addEventListener('keydown', (e) => { if (e.key === 'Backspace' && !d.value && i > 0) digits[i - 1].focus(); });
        });
    });
}

// ===================================================================
// SERVICES RENDER
// ===================================================================
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = services.map(s => `<div class="svc-card"><iconify-icon icon="${s.icon}" width="32"></iconify-icon><h4>${lang === 'si' ? s.si : s.en}</h4></div>`).join('');
}

// ===================================================================
// CHANNEL PAGE
// ===================================================================
function renderChannelPage() {
    // Filters
    const filtersEl = document.getElementById('channelFilters');
    const cats = ['all', ...new Set(doctors.map(d => d.category))];
    filtersEl.innerHTML = cats.map(c => `<button class="filter-chip${channelFilter === c ? ' active' : ''}" onclick="setChannelFilter('${c}')">${categoryLabels[lang][c] || c}</button>`).join('');
    // Search
    const search = (channelSearch || '').toLowerCase();
    let filtered = doctors;
    if (channelFilter !== 'all') filtered = filtered.filter(d => d.category === channelFilter);
    if (search) filtered = filtered.filter(d => docName(d).toLowerCase().includes(search) || docSpec(d).toLowerCase().includes(search) || d.category.toLowerCase().includes(search));
    // Cards
    const grid = document.getElementById('channelDocGrid');
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-msg">No doctors found</div>';
        return;
    }
    grid.innerHTML = filtered.map((d, i) => `
        <div class="doc-card" style="animation-delay:${i * 0.06}s">
            <img class="doc-card-img" src="${d.image}" alt="${docName(d)}" loading="lazy">
            <div class="doc-card-body">
                <div class="doc-card-top"><h3 class="doc-card-name">${docName(d)}</h3><span class="doc-card-badge badge-${d.category}">${categoryLabels[lang][d.category] || d.category}</span></div>
                <p class="doc-card-spec">${docSpec(d)}</p>
                <p class="doc-card-qual">${d.qual}</p>
                <div class="doc-card-meta">
                    <div class="doc-meta-item"><iconify-icon icon="lucide:award" width="16"></iconify-icon><span>${t('expLabel')}: ${docExp(d)}</span></div>
                    <div class="doc-meta-item"><iconify-icon icon="lucide:clock" width="16"></iconify-icon><span>${t('availLabel')}: ${docAvail(d)}</span></div>
                    <div class="doc-meta-item"><iconify-icon icon="lucide:map-pin" width="16"></iconify-icon><span>${docBranch(d)}</span></div>
                    <div class="doc-meta-item"><iconify-icon icon="lucide:banknote" width="16"></iconify-icon><span>${t('feeLabel')}: Rs. ${d.fee.toLocaleString()}</span></div>
                </div>
                <div class="doc-card-actions">
                    <button class="doc-card-book" onclick="openAppointmentWizard(${d.id})">${t('bookBtn')}</button>
                    <button class="doc-card-view" onclick="openDoctorProfile(${d.id})">${t('viewProfile')}</button>
                </div>
            </div>
        </div>
    `).join('');
}
function setChannelFilter(f) { channelFilter = f; renderChannelPage(); }
document.getElementById('channelSearchInput').oninput = (e) => { channelSearch = e.target.value; renderChannelPage(); };

// ===================================================================
// DOCTOR PROFILE MODAL
// ===================================================================
function openDoctorProfile(docId) {
    const d = doctors.find(x => x.id === docId);
    if (!d) return;
    const today = new Date();
    const nextDays = [];
    for (let i = 0; i < 14; i++) {
        const dt = new Date(today);
        dt.setDate(dt.getDate() + i);
        if (d.availDays.includes(dt.getDay())) nextDays.push(dt);
    }
    const isAvailToday = d.availDays.includes(today.getDay());
    const todayBooked = getBookedCount(d.id, formatDate(today));

    document.getElementById('doctorProfileBody').innerHTML = `
        <div class="doc-profile-header">
            <img class="doc-profile-img" src="${d.image}" alt="${docName(d)}">
            <div class="doc-profile-info">
                <h2>${docName(d)}</h2>
                <p class="doc-profile-spec">${docSpec(d)}</p>
                <p class="doc-profile-qual">${d.qual}</p>
                <div class="doc-profile-meta">
                    <div class="dp-meta"><iconify-icon icon="lucide:award" width="16"></iconify-icon>${t('expLabel')}: ${docExp(d)}</div>
                    <div class="dp-meta"><iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>${docBranch(d)}</div>
                    <div class="dp-meta"><iconify-icon icon="lucide:banknote" width="16"></iconify-icon>Rs. ${d.fee.toLocaleString()}</div>
                </div>
            </div>
        </div>
        <div class="doc-profile-body">
            <p style="font-size:.9rem;color:var(--text-secondary);line-height:1.7;margin-bottom:20px">${docBio(d)}</p>
            <div class="avail-section">
                <h4>${isAvailToday ? '✅ ' + t('doctorAvailable') : '❌ ' + t('doctorNotAvailable')}</h4>
                ${isAvailToday ? `<div class="queue-info"><div class="queue-row"><span class="ql">${t('bookedToday')}</span><span class="qv">${todayBooked}</span></div><div class="queue-row"><span class="ql">${t('currentQueue')}</span><span class="qv">#${todayBooked + 1}</span></div><div class="queue-row"><span class="ql">${t('yourNumber')}</span><span class="qv">#${todayBooked + 2}</span></div><div class="queue-row"><span class="ql">${t('estimatedTime')}</span><span class="qv">~${(todayBooked + 2) * 10} min</span></div></div>` : ''}
                <h4 style="margin-top:16px">${t('selectDate')} - ${t('daysFull').slice(0,7).join(', ')}</h4>
                <div class="avail-dates">
                    ${nextDays.slice(0, 10).map(dt => {
                        const isToday = formatDate(dt) === formatDate(today);
                        const bk = getBookedCount(d.id, formatDate(dt));
                        return `<div class="avail-date${isToday ? ' today' : ''}"><div style="font-weight:600">${t('days')[dt.getDay()]}</div><div>${dt.getDate()} ${t('months')[dt.getMonth()]}</div><div style="font-size:.72rem;color:var(--text-tertiary)">${bk} ${t('bookedToday')}</div></div>`;
                    }).join('')}
                </div>
                <div class="special-request"><a href="#" onclick="event.preventDefault();showToast('Special date/time request form would open here','info')"><iconify-icon icon="lucide:calendar-clock" width="16"></iconify-icon>${t('specialDateRequest')}</a></div>
            </div>
            <button class="btn-primary-full" style="margin-top:20px" onclick="closeDoctorProfile();openAppointmentWizard(${d.id})">${t('bookAppointment')}</button>
        </div>
    `;
    document.getElementById('doctorProfileModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeDoctorProfile() {
    document.getElementById('doctorProfileModal').classList.remove('open');
    document.body.style.overflow = '';
}
function getBookedCount(docId, dateStr) { return appointments.filter(a => a.doctorId === docId && a.date === dateStr).length; }
function formatDate(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

// ===================================================================
// APPOINTMENT WIZARD
// ===================================================================
function openAppointmentWizard(docId) {
    wizardStep = 1;
    wizardData = { doctorId: docId || null, bookFor: 'self' };
    document.getElementById('apptWizardModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderWizardStep();
}
function closeApptWizard() {
    document.getElementById('apptWizardModal').classList.remove('open');
    document.body.style.overflow = '';
}

function renderWizardStep() {
    // Update step indicators
    document.querySelectorAll('.w-step').forEach(s => {
        const sn = parseInt(s.dataset.step);
        s.classList.remove('active', 'done');
        if (sn === wizardStep) s.classList.add('active');
        else if (sn < wizardStep) s.classList.add('done');
    });
    const body = document.getElementById('wizardBody');
    const footer = document.getElementById('wizardFooter');
    let bodyHTML = '';
    let footerHTML = '';

    if (wizardStep === 1) {
        // Select Doctor
        const search = (wizardData.docSearch || '').toLowerCase();
        let filtered = doctors;
        if (search) filtered = filtered.filter(d => docName(d).toLowerCase().includes(search) || docSpec(d).toLowerCase().includes(search));
        bodyHTML = `
            <div class="form-group" style="margin-bottom:12px"><div class="channel-search" style="max-width:100%;margin:0"><iconify-icon icon="lucide:search" width="18"></iconify-icon><input type="text" placeholder="${t('searchDoctorPlaceholder')}" value="${wizardData.docSearch || ''}" oninput="wizardData.docSearch=this.value;renderWizardStep()"></div></div>
            <div class="wiz-doctor-select">
                ${filtered.map(d => `<div class="wiz-doc-option${wizardData.doctorId === d.id ? ' selected' : ''}" onclick="wizardData.doctorId=${d.id};renderWizardStep()"><img src="${d.image}" alt=""><div><div class="wdo-name">${docName(d)}</div><div class="wdo-spec">${docSpec(d)} — ${docBranch(d)}</div></div></div>`).join('')}
            </div>
        `;
        footerHTML = `<div></div><button class="btn-wiz-next" onclick="wizardNext()">${t('search')} →</button>`;
    }
    else if (wizardStep === 2) {
        const doc = doctors.find(d => d.id === wizardData.doctorId);
        const today = new Date();
        const availDates = [];
        for (let i = 0; i < 14; i++) {
            const dt = new Date(today); dt.setDate(dt.getDate() + i);
            if (doc.availDays.includes(dt.getDay())) availDates.push(dt);
        }
        const docBranches = [...new Set(doctors.filter(d => d.category === doc.category).map(d => d.branch))];
        const selectedDate = wizardData.date || '';
        const isAvail = selectedDate && doc.availDays.includes(new Date(selectedDate + 'T00:00:00').getDay());
        const booked = selectedDate ? getBookedCount(doc.id, selectedDate) : 0;
        bodyHTML = `
            <div class="wiz-branch-date">
                <div class="form-group"><label>${t('selectBranch')}</label><select id="wizBranch" onchange="wizardData.branch=this.value;renderWizardStep()">
                    <option value="">${t('selectBranch')}</option>
                    ${branches.map(b => `<option value="${b.id}"${wizardData.branch === b.id ? ' selected' : ''}>${lang === 'si' ? b.nameSi : b.name}</option>`).join('')}
                </select></div>
                <div class="form-group"><label>${t('selectDate')}</label><select id="wizDate" onchange="wizardData.date=this.value;renderWizardStep()">
                    <option value="">${t('selectDate')}</option>
                    ${availDates.map(dt => `<option value="${formatDate(dt)}"${wizardData.date === formatDate(dt) ? ' selected' : ''}>${t('days')[dt.getDay()]} ${dt.getDate()} ${t('months')[dt.getMonth()]} ${dt.getFullYear()}</option>`).join('')}
                </select></div>
            </div>
            <div class="form-group"><label>${t('selectCategory')}</label><select onchange="wizardData.category=this.value"><option value="">${t('selectCategory')}</option>${patientCategories[lang].map((c, i) => `<option value="${i}"${wizardData.category == i ? ' selected' : ''}>${c}</option>`).join('')}</select></div>
            ${isAvail ? `<div class="queue-info"><h4>📊 ${docName(doc)} — ${t('daysFull')[new Date(selectedDate + 'T00:00:00').getDay()]}</h4><div class="queue-row"><span class="ql">${t('doctorAvailable')}</span><span class="qv" style="color:var(--success)">✅</span></div><div class="queue-row"><span class="ql">${t('currentQueue')}</span><span class="qv">#${booked + 1}</span></div><div class="queue-row"><span class="ql">${t('yourNumber')}</span><span class="qv">#${booked + 2}</span></div><div class="queue-row"><span class="ql">${t('estimatedTime')}</span><span class="qv">~${(booked + 2) * 10} min</span></div><div class="queue-row"><span class="ql">${t('bookedToday')}</span><span class="qv">${booked}</span></div></div>` : (selectedDate ? `<div class="queue-info" style="border-color:var(--danger)"><p style="color:var(--danger);font-weight:600">❌ ${t('doctorNotAvailable')}</p></div>` : '')}
            <div class="special-request"><a href="#" onclick="event.preventDefault();showToast('Special date/time request','info')"><iconify-icon icon="lucide:calendar-clock" width="16"></iconify-icon>${t('specialDateRequest')}</a></div>
        `;
        footerHTML = `<button class="btn-wiz-back" onclick="wizardBack()">← ${t('wStep1')}</button><button class="btn-wiz-next" onclick="wizardNext()">${t('wStep3')} →</button>`;
    }
    else if (wizardStep === 3) {
        // Patient Details
        const isSelf = wizardData.bookFor === 'self';
        const u = currentUser;
        bodyHTML = `
            <div class="book-for-toggle">
                <button class="book-for-btn${isSelf ? ' active' : ''}" onclick="wizardData.bookFor='self';renderWizardStep()">${t('bookForSelf')}</button>
                <button class="book-for-btn${!isSelf ? ' active' : ''}" onclick="wizardData.bookFor='other';renderWizardStep()">${t('bookForOther')}</button>
            </div>
            ${u ? `<div style="padding:10px;background:var(--accent-glow);border-radius:10px;font-size:.84rem;color:var(--accent);margin-bottom:12px">✅ ${t('loginToAutofill')}</div>` : `<div style="padding:10px;background:#FEF3C7;border-radius:10px;font-size:.84rem;color:#D97706;margin-bottom:12px">⚠️ ${t('notLoggedIn')} — <a href="#" class="link" onclick="event.preventDefault();closeApptWizard();openAuthModal('login')">${t('loginNow')}</a> ${t('fillManually')}</div>`}
            ${isSelf ? `
                <div class="form-group"><label>${t('fullName')}</label><input type="text" id="wizName" value="${u ? u.fullName : (wizardData.patientName || '')}"></div>
                <div class="form-row-2"><div class="form-group"><label>${t('phone1')}</label><input type="tel" id="wizPhone" value="${u ? u.phone1 : (wizardData.patientPhone || '')}"></div><div class="form-group"><label>${t('idNumber')}</label><input type="text" id="wizNIC" value="${u ? u.idNumber : (wizardData.patientNIC || '')}"></div></div>
                <div class="form-group"><label>${t('age')}</label><input type="number" id="wizAge" value="${u ? u.age : (wizardData.patientAge || '')}"></div>
            ` : `
                ${savedProfiles.length > 0 ? `<div style="margin-bottom:12px"><label style="font-size:.84rem;font-weight:500;color:var(--text-secondary);display:block;margin-bottom:6px">${t('savedProfiles')}</label>${savedProfiles.map((p, i) => `<div class="wiz-doc-option" onclick="loadSavedProfile(${i})" style="margin-bottom:6px"><div><div class="wdo-name">${p.nickname} (${p.name})</div><div class="wdo-spec">${p.phone} | ${p.nic}</div></div></div>`).join('')}</div>` : ''}
                <div class="form-group"><label>${t('otherName')}</label><input type="text" id="wizName" value="${wizardData.patientName || ''}"></div>
                <div class="form-row-2"><div class="form-group"><label>${t('otherPhone')}</label><input type="tel" id="wizPhone" value="${wizardData.patientPhone || ''}"></div><div class="form-group"><label>${t('otherNIC')}</label><input type="text" id="wizNIC" value="${wizardData.patientNIC || ''}"></div></div>
                <div class="form-group"><label>${t('otherAge')}</label><input type="number" id="wizAge" value="${wizardData.patientAge || ''}"></div>
                <div class="form-row-2"><div class="form-group"><label>${t('nickname')}</label><input type="text" id="wizNickname" value="${wizardData.nickname || ''}" placeholder="${t('nickname')}"></div><div class="form-group" style="display:flex;align-items:flex-end"><button class="btn-wiz-save" onclick="saveCurrentProfile()" style="width:100%">💾 ${t('saveProfile')}</button></div></div>
            `}
        `;
        footerHTML = `<button class="btn-wiz-back" onclick="wizardBack()">← ${t('wStep2')}</button><button class="btn-wiz-next" onclick="wizardNext()">${t('wStep4')} →</button>`;
    }
    else if (wizardStep === 4) {
        // Confirm Details
        const doc = doctors.find(d => d.id === wizardData.doctorId);
        const br = branches.find(b => b.id === wizardData.branch);
        const dt = wizardData.date ? new Date(wizardData.date + 'T00:00:00') : null;
        const booked = wizardData.date ? getBookedCount(doc.id, wizardData.date) : 0;
        bodyHTML = `
            <div class="confirm-details"><h4>${t('confirmDetails')}</h4>
                <div class="confirm-row"><span class="cl">${t('wStep1')}</span><span class="cv">${docName(doc)}</span></div>
                <div class="confirm-row"><span class="cl">${t('selectBranch')}</span><span class="cv">${br ? (lang === 'si' ? br.nameSi : br.name) : '-'}</span></div>
                <div class="confirm-row"><span class="cl">${t('selectDate')}</span><span class="cv">${dt ? t('days')[dt.getDay()] + ' ' + dt.getDate() + ' ' + t('months')[dt.getMonth()] + ' ' + dt.getFullYear() : '-'}</span></div>
                <div class="confirm-row"><span class="cl">${t('selectCategory')}</span><span class="cv">${patientCategories[lang][wizardData.category] || '-'}</span></div>
                <div class="confirm-row"><span class="cl">${t('yourNumber')}</span><span class="cv">#${booked + 2}</span></div>
                <div class="confirm-row"><span class="cl">${t('estimatedTime')}</span><span class="cv">~${(booked + 2) * 10} min</span></div>
                <div class="confirm-row"><span class="cl">${t('fullName')}</span><span class="cv">${wizardData.patientName || '-'}</span></div>
                <div class="confirm-row"><span class="cl">${t('phone1')}</span><span class="cv">${wizardData.patientPhone || '-'}</span></div>
            </div>
            <div class="summary-box">
                <div class="summary-row"><span>${t('consultationFee')}</span><span>Rs. ${doc.fee.toLocaleString()}</span></div>
                <div class="summary-row"><span>${t('hospitalFee')}</span><span>Rs. 500</span></div>
                <div class="summary-row total"><span>${t('total')}</span><span class="sv">Rs. ${(doc.fee + 500).toLocaleString()}</span></div>
            </div>
            <label class="checkbox-label"><input type="checkbox" id="wizAgreeRules"><span>${t('agreeAgree')}</span></label>
        `;
        footerHTML = `<button class="btn-wiz-back" onclick="wizardBack()">← ${t('wStep3')}</button><button class="btn-wiz-next" onclick="wizardNext()">${t('wStep5')} →</button>`;
    }
    else if (wizardStep === 5) {
        // Payment
        const doc = doctors.find(d => d.id === wizardData.doctorId);
        const total = doc.fee + 500;
        const pm = wizardData.payMethod || '';
        bodyHTML = `
            <div class="summary-box">
                <div class="summary-row"><span>${t('consultationFee')}</span><span>Rs. ${doc.fee.toLocaleString()}</span></div>
                <div class="summary-row"><span>${t('hospitalFee')}</span><span>Rs. 500</span></div>
                <div class="summary-row total"><span>${t('total')}</span><span class="sv">Rs. ${total.toLocaleString()}</span></div>
            </div>
            <div class="pay-methods">
                <div class="pay-method${pm === 'bank' ? ' selected' : ''}" onclick="wizardData.payMethod='bank';renderWizardStep()"><iconify-icon icon="lucide:building-2" width="22"></iconify-icon><div><div class="pm-title">${t('bankTransfer')}</div><div class="pm-desc">${t('bankDetailsTitle')}</div></div></div>
                <div class="pay-method${pm === 'card' ? ' selected' : ''}" onclick="wizardData.payMethod='card';renderWizardStep()"><iconify-icon icon="lucide:credit-card" width="22"></iconify-icon><div><div class="pm-title">${t('cardPayment')}</div><div class="pm-desc">Visa / Master / AMEX</div></div></div>
                <div class="pay-method${pm === 'later' ? ' selected' : ''}" onclick="wizardData.payMethod='later';renderWizardStep()"><iconify-icon icon="lucide:wallet" width="22"></iconify-icon><div><div class="pm-title">${t('payLater')}</div><div class="pm-desc">${t('payLaterDesc')}</div></div></div>
            </div>
            ${pm === 'bank' ? `
                <div class="bank-details"><h4>${t('bankDetailsTitle')}</h4>
                    <div class="bank-row"><span class="bl">${t('accountName')}</span><span class="bv">MediCare Lanka Hospital <button class="copy-btn" onclick="copyText('MediCare Lanka Hospital')">📋</button></span></div>
                    <div class="bank-row"><span class="bl">${t('accountNumber')}</span><span class="bv">0038-0200-1234-56 <button class="copy-btn" onclick="copyText('0038-0200-1234-56')">📋</button></span></div>
                    <div class="bank-row"><span class="bl">${t('bankName')}</span><span class="bv">Bank of Ceylon</span></div>
                    <div class="bank-row"><span class="bl">${t('branchName')}</span><span class="bv">Colombo Fort</span></div>
                </div>
                <div class="upload-area" onclick="showToast('File upload simulated','info')"><iconify-icon icon="lucide:upload-cloud" width="32"></iconify-icon><p>${t('uploadSlipDesc')}</p></div>
            ` : pm === 'card' ? `
                <div class="card-form">
                    <div class="form-group"><label>${t('cardNumber')}</label><input type="text" placeholder="1234 5678 9012 3456" maxlength="19"></div>
                    <div class="card-row"><div class="form-group"><label>${t('expiryDate')}</label><input type="text" placeholder="MM/YY" maxlength="5"></div><div class="form-group"><label>${t('cvv')}</label><input type="text" placeholder="123" maxlength="3"></div></div>
                    <div class="form-group"><label>${t('cardHolder')}</label><input type="text" placeholder="${t('cardHolder')}"></div>
                </div>
            ` : pm === 'later' ? `<div style="padding:16px;background:#FEF3C7;border-radius:12px;font-size:.88rem;color:#92400E"><iconify-icon icon="lucide:info" width="18"></iconify-icon> ${t('payLaterDesc')}</div>` : ''}
        `;
        footerHTML = `<button class="btn-wiz-back" onclick="wizardBack()">← ${t('wStep4')}</button><button class="btn-wiz-next" onclick="wizardNext()">${t('wStep6')} →</button>`;
    }
    else if (wizardStep === 6) {
        // Success
        const doc = doctors.find(d => d.id === wizardData.doctorId);
        const ref = 'MC-' + Date.now().toString(36).toUpperCase();
        const booked = wizardData.date ? getBookedCount(doc.id, wizardData.date) : 0;
        // Save appointment
        const appt = {
            id: ref, doctorId: doc.id, doctorName: docName(doc), branch: wizardData.branch,
            date: wizardData.date, category: wizardData.category,
            patientName: wizardData.patientName, patientPhone: wizardData.patientPhone, patientNIC: wizardData.patientNIC,
            queueNumber: booked + 2, fee: doc.fee + 500, payMethod: wizardData.payMethod,
            status: wizardData.payMethod === 'bank' ? 'pending' : 'confirmed',
            userId: currentUser?.id || null, createdAt: new Date().toISOString()
        };
        appointments.push(appt);
        localStorage.setItem('ml_appointments', JSON.stringify(appointments));

        // Notifications based on payment method
        if (wizardData.payMethod === 'bank') {
            addNotification(`💳 Bank transfer uploaded for ${docName(doc)} on ${wizardData.date}. Ref: ${ref}. Verification pending.`);
            showToast(`📩 SMS + Email sent. Dashboard notification added. Verification pending.`, 'info');
        } else if (wizardData.payMethod === 'card') {
            addNotification(`✅ Card payment successful for ${docName(doc)} on ${wizardData.date}. Ref: ${ref}. Queue #${appt.queueNumber}.`);
            showToast(`📩 SMS sent to ${wizardData.patientPhone}. Dashboard notification added.`, 'success');
        } else {
            addNotification(`🏥 Pay at hospital: ${docName(doc)} on ${wizardData.date}. Ref: ${ref}. Queue #${appt.queueNumber}. Please visit hospital and pay.`);
            showToast(`📩 SMS + Email sent. Dashboard notification added. Please visit hospital to pay.`, 'warning');
        }

        bodyHTML = `
            <div class="success-screen">
                <iconify-icon icon="lucide:check-circle" width="72"></iconify-icon>
                <h3>${t('bookingConfirmed')}</h3>
                <p>${t('bookingConfirmedDesc')}</p>
                <div class="confirm-details">
                    <div class="confirm-row"><span class="cl">${t('bookingRef')}</span><span class="cv">${ref}</span></div>
                    <div class="confirm-row"><span class="cl">${t('wStep1')}</span><span class="cv">${docName(doc)}</span></div>
                    <div class="confirm-row"><span class="cl">${t('selectDate')}</span><span class="cv">${wizardData.date}</span></div>
                    <div class="confirm-row"><span class="cl">${t('yourNumber')}</span><span class="cv">#${appt.queueNumber}</span></div>
                    <div class="confirm-row"><span class="cl">${t('total')}</span><span class="cv">Rs. ${appt.fee.toLocaleString()}</span></div>
                    <div class="confirm-row"><span class="cl">Payment</span><span class="cv">${wizardData.payMethod === 'bank' ? t('bankTransfer') : wizardData.payMethod === 'card' ? t('cardPayment') : t('payLater')}</span></div>
                </div>
            </div>
        `;
        footerHTML = `<div></div><button class="btn-wiz-next" onclick="closeApptWizard();navigateTo('channel')">${t('backToChannel')}</button>`;
    }

    body.innerHTML = bodyHTML;
    footer.innerHTML = footerHTML;
}

function wizardNext() {
    if (wizardStep === 1) {
        if (!wizardData.doctorId) { showToast('Please select a doctor', 'error'); return; }
    } else if (wizardStep === 2) {
        if (!wizardData.branch) { showToast('Please select branch', 'error'); return; }
        if (!wizardData.date) { showToast('Please select date', 'error'); return; }
        if (wizardData.category === undefined) { showToast('Please select patient category', 'error'); return; }
    } else if (wizardStep === 3) {
        const name = document.getElementById('wizName')?.value.trim();
        const phone = document.getElementById('wizPhone')?.value.trim();
        if (!name || !phone) { showToast('Please fill patient name and phone', 'error'); return; }
        wizardData.patientName = name;
        wizardData.patientPhone = phone;
        wizardData.patientNIC = document.getElementById('wizNIC')?.value.trim() || '';
        wizardData.patientAge = document.getElementById('wizAge')?.value || '';
        wizardData.nickname = document.getElementById('wizNickname')?.value.trim() || '';
    } else if (wizardStep === 4) {
        if (!document.getElementById('wizAgreeRules')?.checked) { showToast('Please agree to Terms & Conditions', 'error'); return; }
    } else if (wizardStep === 5) {
        if (!wizardData.payMethod) { showToast('Please select payment method', 'error'); return; }
    }
    wizardStep++;
    renderWizardStep();
}
function wizardBack() { if (wizardStep > 1) { wizardStep--; renderWizardStep(); } }

function loadSavedProfile(idx) {
    const p = savedProfiles[idx];
    wizardData.patientName = p.name;
    wizardData.patientPhone = p.phone;
    wizardData.patientNIC = p.nic;
    wizardData.patientAge = p.age;
    renderWizardStep();
}
function saveCurrentProfile() {
    const name = document.getElementById('wizName')?.value.trim();
    const phone = document.getElementById('wizPhone')?.value.trim();
    const nic = document.getElementById('wizNIC')?.value.trim();
    const age = document.getElementById('wizAge')?.value;
    const nickname = document.getElementById('wizNickname')?.value.trim();
    if (!name || !phone) { showToast('Please fill name and phone', 'error'); return; }
    savedProfiles.push({ name, phone, nic, age, nickname: nickname || name });