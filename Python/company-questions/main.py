

class Patient:
    def __init__(self, name, pincode, phoneNumber, is_corona):
        self.name=name
        self.pincode=pincode
        self.phoneNumber=phoneNumber
        self.is_corona=is_corona
        
    def getName(self):
        return self.name
    
    def getPincode(self):
        return self.pincode
    
    def getPhoneNumber(self):
        return self.phoneNumber
    
    def getIs_corona(self):
        return self.is_corona

class CoronaPatient:
    
    def __init__(self):
        self.patientList: Patient = []
        
    def addPatient(self, newPatient):
        self.patientList.append(newPatient)
        
    def countPositiveCases(self):
        cnt = 0
        for patient in self.patientList:
            if patient.getIs_corona():
                cnt+=1
                
        return cnt
    
    def getLessCases(self):
        cases = {}
        
        for patient in self.patientList:
            if patient.getIs_corona():
                pincode = patient.getPincode()
                
                if pincode in cases:
                    cases[pincode] = cases.get(pincode) + 1
                    
                else:
                    cases[pincode] = 1
                    
        mn = min(cases.values())
        
        for key,val in cases.items():
            if val == mn:
                return key
            
        return -1                    