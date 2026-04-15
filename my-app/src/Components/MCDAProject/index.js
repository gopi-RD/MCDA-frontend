
import {Component} from "react" 
import { v4 as uuidv4 } from "uuid";

import "./index.css"

class MCDAProject extends Component {
    state={username:"",designation:"",institution:"",areaOfExpertise:"",
        experience:"",qualifications:"",isUserErr:false,isDesignationErr:false,
        isInsitutionErr:false,isAreaOfExpertiseErr:false,isExperienceErr:false,
        isQualificationsErr:false,isUserErrMsg:"",isDesignationErrMsg:"",
        isInsitutionErrMsg:"",isAreaOfExpertiseErrMsg:"",isExperienceErrMsg:"",
        isQualificationsErrMsg:"",isErr:false,isErrorMsg:"",isGenerate:false,WSvsWS:"1",
        WSvsCD:"",WSvsJC:"",WSvsSD:"",WSvsPA:"",CDvsWS:"",CDvsCD:"1",CDvsJC:"",CDvsSD:"",CDvsPA:"",JCvsWS:"",JCvsCD:"",
        JCvsJC:"1",JCvsSD:"",JCvsPA:"",SDvsWS:"",SDvsCD:"",SDvsJC:"",SDvsSD:"1",SDvsPA:"",
        PAvsWS:"",PAvsCD:"",PAvsJC:"",PAvsSD:"",PAvsPA:"1",CR:0,isWSvsCD:true,isWSvsJC:true,
        isWSvsSD:true,isWSvsPA:true,isCDvsJC:true,isCDvsSD:true,isCDvsPA:true,isJCvsSD:true,
        isJCvsPA:true,isSDvsPA:true,ICvsIC:"1",ICvsCS:"",ICvsWC:"",ICvsLCC:"",ICvsMCC:"",
        isICvsCS:true,isICvsWC:true,isICvsLCC:true,isICvsMCC:true,CSvsIC:"",CSvsCS:"1",
        CSvsWC:"",CSvsLCC:"",CSvsMCC:"",isCSvsWC:true,isCSvsLCC:true,isCSvsMCC:true,WCvsIC:"",
        WCvsCS:"",WCvsWC:"1",WCvsLCC:"",WCvsMCC:"",isWCvsLCC:true,isWCvsMCC:true,LCCvsIC:"",
        LCCvsCS:"",LCCvsWC:"",LCCvsLCC:"1",LCCvsMCC:"",isLCCvsMCC:true,MCCvsIC:"",MCCvsCS:"",
        MCCvsWC:"",MCCvsLCC:"",MCCvsMCC:"1",CRC:0,CMvsCM:"1",CMvsCWG:"",CMvsEC:"",CMvsWU:"",
        CMvsLD:"",isCMvsCWG:true,isCMvsEC:true,isCMvsWU:true,isCMvsLD:true,CWGvsCM:"",
        CWGvsCWG:"1",CWGvsEC:"",CWGvsWU:"",CWGvsLD:"",isCWGvsEC:true,isCWGvsWU:true,
        isCWGvsLD:true,ECvsCM:"",ECvsCWG:"",ECvsEC:"1",ECvsWU:"",ECvsLD:"",
        isECvsWU:true,isECvsLD:true,WUvsCM:"",WUvsCWG:"",WUvsEC:"",WUvsWU:"1",WUvsLD:"",
        isWUvsLD:true,LDvsCM:"",LDvsCWG:"",LDvsEC:"",LDvsWU:"",LDvsLD:"1",CRE:0,
        isGenerateEnvironmental:false,CVvsWS:"",CVvsCD:"",CVvsJC:"",CVvsSD:"",CVvsPA:"",
        CVvsIC:"",CVvsCS:"",CVvsWC:"",CVvsLCC:"",CVvsMCC:"",CVvsCM:"",CVvsCWG:"",
        CVvsEC:"",CVvsWU:"",CVvsLD:"",PCvsWS:"",PCvsCD:"",PCvsJC:"",PCvsSD:"",PCvsPA:"",
        PCvsIC:"",PCvsCS:"",PCvsWC:"",PCvsLCC:"",PCvsMCC:"",PCvsCM:"",PCvsCWG:"",PCvsEC:"",
        PCvsWU:"",PCvsLD:"",PFvsWS:"",PFvsCD:"",PFvsJC:"",PFvsSD:"",PFvsPA:"",PFvsIC:"",
        PFvsCS:"",PFvsWC:"",PFvsLCC:"",PFvsMCC:"",PFvsCM:"",PFvsCWG:"",PFvsEC:"",PFvsWU:"",
        PFvsLD:"",MvsWS:"",MvsCD:"",MvsJC:"",MvsSD:"",MvsPA:"",MvsIC:"",MvsCS:"",MvsWC:"",
        MvsLCC:"",MvsMCC:"",MvsCM:"",MvsCWG:"",MvsEC:"",MvsWU:"",MvsLD:"",AMvsWS:"",AMvsCD:"",
        AMvsJC:"",AMvsSD:"",AMvsPA:"",AMvsIC:"",AMvsCS:"",AMvsWC:"",AMvsLCC:"",AMvsMCC:"",
        AMvsCM:"",AMvsCWG:"",AMvsEC:"",AMvsWU:"",AMvsLD:"",isSubmitted:false,criteria: ["Worker safety and health", "Community disruption", "Job creation", "Skill development", "Public acceptance"],
        selectedValues: {}, error: "",criteriaE:["Initial / capital cost","Construction speed","Labour / workforce cost","Maintenance / life cycle cost","Material wastage cost"],
        selectedValuesE:{},errorE:"",criteriaEv:["Carbon emissions / CO2 footprint","Construction waste generation","Energy consumption","Water usage","Land disturbance"],
        selectedValuesEv:{},errorEv:""}

    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }

    onChangeDesignation=(event)=>{
        this.setState({designation:event.target.value})
    }
    onChangeInstitution=(event)=>{
        this.setState({institution:event.target.value})
    }
    onChangeAreaOfExpertise=(event)=>{
        this.setState({areaOfExpertise:event.target.value})
    }
    onChangeExperience=(event)=>{
        this.setState({experience:event.target.value})
    }
    onChangeQualifications=(event)=>{
        this.setState({qualifications:event.target.value})
    }

    // AHP Pairwise Comparison Matrices generation and Consistency Ratio check logic will be implemented in this function
    
    // Social Criteria Pairwise Comparison Handlers
    //First row Worker safety and health vs other 4 social criteria
    onEnterWSvsCDRating=(event)=>{
        this.setState({WSvsCD:event.target.value,CDvsWS:(parseFloat(1/event.target.value)).toFixed(3),isWSvsCD:false})
    }
    onEnterWSvsSDRating=(event)=>{
        this.setState({WSvsSD:event.target.value,SDvsWS:(parseFloat(1/event.target.value).toFixed(3)),isWSvsSD:false})
    }
    onEnterWSvsJCRating=(event)=>{
        this.setState({WSvsJC:event.target.value,JCvsWS:parseFloat(1/event.target.value).toFixed(3),isWSvsJC:false})
    }
    onEnterWSvsPARating=(event)=>{
        this.setState({WSvsPA:event.target.value,PAvsWS:parseFloat(1/event.target.value).toFixed(3),isWSvsPA:false })
    }

    //Second row Community disruption vs other 4 social criteria
    
    onEnterCDvsJCRating=(event)=>{
        this.setState({CDvsJC:event.target.value,JCvsCD:parseFloat(1/event.target.value).toFixed(3),isCDvsJC:false })
    }
    onEnterCDvsSDRating=(event)=>{
        this.setState({CDvsSD:event.target.value,SDvsCD:parseFloat(1/event.target.value).toFixed(3),isCDvsSD:false })
    }
    onEnterCDvsPARating=(event)=>{
        this.setState({CDvsPA:event.target.value,PAvsCD:parseFloat(1/event.target.value).toFixed(3),isCDvsPA:false })
    }

    //Third row Job creation vs other 4 social criteria
    
    onEnterJCvsSDRating=(event)=>{
        this.setState({JCvsSD:event.target.value,SDvsJC:parseFloat(1/event.target.value).toFixed(3),isJCvsSD:false })
    }
    onEnterJCvsPARating=(event)=>{
        this.setState({JCvsPA:event.target.value,PAvsJC:parseFloat(1/event.target.value).toFixed(3),isJCvsPA:false })
    }
    // The handlers for the remaining pairwise comparisons (Skill development and Public acceptance) will be implemented similarly, ensuring that the reciprocal values are automatically calculated and stored in the state.
    onEnterSDvsPARating=(event)=>{
        this.setState({SDvsPA:event.target.value,PAvsSD:parseFloat(1/event.target.value).toFixed(3),isSDvsPA:false })
    }
    
    onSocialConsistencyRatioCheck=()=>{
        const {WSvsWS,WSvsCD,WSvsSD,WSvsJC,WSvsPA,CDvsWS,CDvsCD,CDvsSD,CDvsJC,CDvsPA,JCvsWS,JCvsCD,JCvsJC,JCvsSD,JCvsPA,SDvsWS,SDvsCD,SDvsJC,SDvsSD,SDvsPA,PAvsWS,PAvsCD,PAvsJC,PAvsSD,PAvsPA} = this.state
        
        let sumOfCol1=(parseFloat(WSvsWS)+parseFloat(CDvsWS)+parseFloat(JCvsWS)+parseFloat(SDvsWS)+parseFloat(PAvsWS)).toFixed(3)
        let sumOfCol2=(parseFloat(WSvsCD)+parseFloat(CDvsCD)+parseFloat(JCvsCD)+parseFloat(SDvsCD)+parseFloat(PAvsCD)).toFixed(3)
        let sumOfCol3=(parseFloat(WSvsJC)+parseFloat(CDvsJC)+parseFloat(JCvsJC)+parseFloat(SDvsJC)+parseFloat(PAvsJC)).toFixed(3)
        let sumOfCol4=(parseFloat(WSvsSD)+parseFloat(CDvsSD)+parseFloat(JCvsSD)+parseFloat(SDvsSD)+parseFloat(PAvsSD)).toFixed(3)
        let sumOfCol5=(parseFloat(WSvsPA)+parseFloat(CDvsPA)+parseFloat(JCvsPA)+parseFloat(SDvsPA)+parseFloat(PAvsPA)).toFixed(3)
        console.log("Sum of column 1: "+sumOfCol1)
        console.log("Sum of column 2: "+sumOfCol2)
        console.log("Sum of column 3: "+sumOfCol3)
        console.log("Sum of column 4: "+sumOfCol4)
        console.log("Sum of column 5: "+sumOfCol5)
        // individual criteria weights calculation
        // First Column
        let WSvsWSValue=(parseFloat(WSvsWS/sumOfCol1)).toFixed(3)
        let CDvsWSValue=(parseFloat(CDvsWS/sumOfCol1)).toFixed(3)
        let JCvsWSValue=(parseFloat(JCvsWS/sumOfCol1)).toFixed(3)
        let SDvsWSValue=(parseFloat(SDvsWS/sumOfCol1)).toFixed(3)
        let PAvsWSValue=(parseFloat(PAvsWS/sumOfCol1)).toFixed(3)

        // Second Column
        let WSvsCDValue=(parseFloat(WSvsCD/sumOfCol2)).toFixed(3)
        let CDvsCDValue=(parseFloat(CDvsCD/sumOfCol2)).toFixed(3)
        let JCvsCDValue=(parseFloat(JCvsCD/sumOfCol2)).toFixed(3)
        let SDvsCDValue=(parseFloat(SDvsCD/sumOfCol2)).toFixed(3)
        let PAvsCDValue=(parseFloat(PAvsCD/sumOfCol2)).toFixed(3)

        // Third Column
        let WSvsJCValue=(parseFloat(WSvsJC/sumOfCol3)).toFixed(3)
        let CDvsJCValue=(parseFloat(CDvsJC/sumOfCol3)).toFixed(3)
        let JCvsJCValue=(parseFloat(JCvsJC/sumOfCol3)).toFixed(3)
        let SDvsJCValue=(parseFloat(SDvsJC/sumOfCol3)).toFixed(3)
        let PAvsJCValue=(parseFloat(PAvsJC/sumOfCol3)).toFixed(3)

        // Fourth Column
        let WSvsSDValue=(parseFloat(WSvsSD/sumOfCol4)).toFixed(3)
        let CDvsSDValue=(parseFloat(CDvsSD/sumOfCol4)).toFixed(3)
        let JCvsSDValue=(parseFloat(JCvsSD/sumOfCol4)).toFixed(3)
        let SDvsSDValue=(parseFloat(SDvsSD/sumOfCol4)).toFixed(3)
        let PAvsSDValue=(parseFloat(PAvsSD/sumOfCol4)).toFixed(3)

        // Fifth Column
        let WSvsPAValue=(parseFloat(WSvsPA/sumOfCol5)).toFixed(3)
        let CDvsPAValue=(parseFloat(CDvsPA/sumOfCol5)).toFixed(3)
        let JCvsPAValue=(parseFloat(JCvsPA/sumOfCol5)).toFixed(3)
        let SDvsPAValue=(parseFloat(SDvsPA/sumOfCol5)).toFixed(3)
        let PAvsPAValue=(parseFloat(PAvsPA/sumOfCol5)).toFixed(3)

        // Row averages calculation to get criteria weights
         let WSWeight=(parseFloat((parseFloat(WSvsWSValue)+parseFloat(WSvsCDValue)+parseFloat(WSvsJCValue)+parseFloat(WSvsSDValue)+parseFloat(WSvsPAValue))/5)).toFixed(3)
         let CDWeight=(parseFloat((parseFloat(CDvsWSValue)+parseFloat(CDvsCDValue)+parseFloat(CDvsJCValue)+parseFloat(CDvsSDValue)+parseFloat(CDvsPAValue))/5)).toFixed(3)
         let JCWeight=(parseFloat((parseFloat(JCvsWSValue)+parseFloat(JCvsCDValue)+parseFloat(JCvsJCValue)+parseFloat(JCvsSDValue)+parseFloat(JCvsPAValue))/5)).toFixed(3)
         let SDWeight=(parseFloat((parseFloat(SDvsWSValue)+parseFloat(SDvsCDValue)+parseFloat(SDvsJCValue)+parseFloat(SDvsSDValue)+parseFloat(SDvsPAValue))/5)).toFixed(3)
         let PAWeight=(parseFloat((parseFloat(PAvsWSValue)+parseFloat(PAvsCDValue)+parseFloat(PAvsJCValue)+parseFloat(PAvsSDValue)+parseFloat(PAvsPAValue))/5)).toFixed(3)

         // Multiply Matrix × Weights 
         let row1 = (parseFloat(WSvsWS)*parseFloat(WSWeight)+parseFloat(WSvsCD)*parseFloat(CDWeight)+parseFloat(WSvsJC)*parseFloat(JCWeight)+parseFloat(WSvsSD)*parseFloat(SDWeight)+parseFloat(WSvsPA)*parseFloat(PAWeight)).toFixed(3)
         let row2 = (parseFloat(CDvsWS)*parseFloat(WSWeight)+parseFloat(CDvsCD)*parseFloat(CDWeight)+parseFloat(CDvsJC)*parseFloat(JCWeight)+parseFloat(CDvsSD)*parseFloat(SDWeight)+parseFloat(CDvsPA)*parseFloat(PAWeight)).toFixed(3)
         let row3 = (parseFloat(JCvsWS)*parseFloat(WSWeight)+parseFloat(JCvsCD)*parseFloat(CDWeight)+parseFloat(JCvsJC)*parseFloat(JCWeight)+parseFloat(JCvsSD)*parseFloat(SDWeight)+parseFloat(JCvsPA)*parseFloat(PAWeight)).toFixed(3)
         let row4 = (parseFloat(SDvsWS)*parseFloat(WSWeight)+parseFloat(SDvsCD)*parseFloat(CDWeight)+parseFloat(SDvsJC)*parseFloat(JCWeight)+parseFloat(SDvsSD)*parseFloat(SDWeight)+parseFloat(SDvsPA)*parseFloat(PAWeight)).toFixed(3)
         let row5 = (parseFloat(PAvsWS)*parseFloat(WSWeight)+parseFloat(PAvsCD)*parseFloat(CDWeight)+parseFloat(PAvsJC)*parseFloat(JCWeight)+parseFloat(PAvsSD)*parseFloat(SDWeight)+parseFloat(PAvsPA)*parseFloat(PAWeight)).toFixed(3)

         // Divide by Weights 
            let lambdaMax1=(parseFloat(row1)/parseFloat(WSWeight)).toFixed(3)
            let lambdaMax2=(parseFloat(row2)/parseFloat(CDWeight)).toFixed(3)
            let lambdaMax3=(parseFloat(row3)/parseFloat(JCWeight)).toFixed(3)
            let lambdaMax4=(parseFloat(row4)/parseFloat(SDWeight)).toFixed(3)
            let lambdaMax5=(parseFloat(row5)/parseFloat(PAWeight)).toFixed(3)

        // average of lambda max values

        let lambdaMax=(parseFloat((parseFloat(lambdaMax1)+parseFloat(lambdaMax2)+parseFloat(lambdaMax3)+parseFloat(lambdaMax4)+parseFloat(lambdaMax5))/5)).toFixed(3)

        // Consistency Index calculation 
        let CI=(parseFloat((lambdaMax-5)/(5-1))).toFixed(3)
        // Consistency Ratio calculation (Random Index for n=5 is 1.12)
        let CR=(parseFloat(CI/1.12)).toFixed(3) 
        this.setState({isGenerate:true,CR:CR})

    }

    // Economic Criteria Pairwise Comparison Handlers will be implemented similarly to the social criteria handlers, ensuring that the reciprocal values are automatically calculated and stored in the state.
        // First row Construction cost vs other 4 economic criteria
    onEnterICvsCSRating=(event)=>{
        this.setState({ICvsCS:event.target.value,CSvsIC:parseFloat(1/event.target.value).toFixed(3),isICvsCS:false })
    }
    onEnterICvsWCRating=(event)=>{
        this.setState({ICvsWC:event.target.value,WCvsIC:parseFloat(1/event.target.value).toFixed(3),isICvsWC:false })
    }
    onEnterICvsLCCRating=(event)=>{
        this.setState({ICvsLCC:event.target.value,LCCvsIC:parseFloat(1/event.target.value).toFixed(3),isICvsLCC:false })
    }
    onEnterICvsMCCRating=(event)=>{
        this.setState({ICvsMCC:event.target.value,MCCvsIC:parseFloat(1/event.target.value).toFixed(3),isICvsMCC:false })
    }

    // second row Construction speed vs other 4 economic criteria

    onEnterCSvsWCRating=(event)=>{
        this.setState({CSvsWC:event.target.value,WCvsCS:parseFloat(1/event.target.value).toFixed(3),isCSvsWC:false })
    }

    onEnterCSvsLCCRating=(event)=>{
        this.setState({CSvsLCC:event.target.value,LCCvsCS:parseFloat(1/event.target.value).toFixed(3),isCSvsLCC:false })
    }
    onEnterCSvsMCCRating=(event)=>{
        this.setState({CSvsMCC:event.target.value,MCCvsCS:parseFloat(1/event.target.value).toFixed(3),isCSvsMCC:false })
    }

    // third row of workfoce cost vs other 4 economic criteria
    onEnterWCvsLCCRating=(event)=>{
        this.setState({WCvsLCC:event.target.value,LCCvsWC:parseFloat(1/event.target.value).toFixed(3),isWCvsLCC:false })
    }
    onEnterWCvsMCCRating=(event)=>{
        this.setState({WCvsMCC:event.target.value,MCCvsWC:parseFloat(1/event.target.value).toFixed(3),isWCvsMCC:false })
    }
    // fourth row of Life Cycle Cost vs other 4 economic criteria
    onEnterLCCvsMCCRating=(event)=>{
        this.setState({LCCvsMCC:event.target.value,MCCvsLCC:parseFloat(1/event.target.value).toFixed(3),isLCCvsMCC:false })
    }

    onEconomicConsistencyRatioCheck=()=>{
        const {ICvsIC,ICvsCS,ICvsWC,ICvsLCC,ICvsMCC,CSvsIC,CSvsCS,CSvsWC,CSvsLCC,CSvsMCC,WCvsIC,WCvsCS,WCvsWC,WCvsLCC,WCvsMCC,LCCvsIC,LCCvsCS,LCCvsWC,LCCvsLCC,LCCvsMCC,MCCvsIC,MCCvsCS,MCCvsWC,MCCvsLCC,MCCvsMCC} = this.state
        let sumOfCol1=(parseFloat(ICvsIC)+parseFloat(CSvsIC)+parseFloat(WCvsIC)+parseFloat(LCCvsIC)+parseFloat(MCCvsIC)).toFixed(3)
        let sumOfCol2=(parseFloat(ICvsCS)+parseFloat(CSvsCS)+parseFloat(WCvsCS)+parseFloat(LCCvsCS)+parseFloat(MCCvsCS)).toFixed(3)
        let sumOfCol3=(parseFloat(ICvsWC)+parseFloat(CSvsWC)+parseFloat(WCvsWC)+parseFloat(LCCvsWC)+parseFloat(MCCvsWC)).toFixed(3)
        let sumOfCol4=(parseFloat(ICvsLCC)+parseFloat(CSvsLCC)+parseFloat(WCvsLCC)+parseFloat(LCCvsLCC)+parseFloat(MCCvsLCC)).toFixed(3)
        let sumOfCol5=(parseFloat(ICvsMCC)+parseFloat(CSvsMCC)+parseFloat(WCvsMCC)+parseFloat(LCCvsMCC)+parseFloat(MCCvsMCC)).toFixed(3)
        console.log("Sum of column 1: "+sumOfCol1)
        console.log("Sum of column 2: "+sumOfCol2)
        console.log("Sum of column 3: "+sumOfCol3)
        console.log("Sum of column 4: "+sumOfCol4)
        console.log("Sum of column 5: "+sumOfCol5)
        // individual criteria weights calculation
        // First Column
        let ICvsICValue=(parseFloat(ICvsIC/sumOfCol1)).toFixed(3)
        let CSvsICValue=(parseFloat(CSvsIC/sumOfCol1)).toFixed(3)
        let WCvsICValue=(parseFloat(WCvsIC/sumOfCol1)).toFixed(3)
        let LCCvsICValue=(parseFloat(LCCvsIC/sumOfCol1)).toFixed(3)
        let MCCvsICValue=(parseFloat(MCCvsIC/sumOfCol1)).toFixed(3)
        // Second Column
        let ICvsCSValue=(parseFloat(ICvsCS/sumOfCol2)).toFixed(3)
        let CSvsCSValue=(parseFloat(CSvsCS/sumOfCol2)).toFixed(3)
        let WCvsCSValue=(parseFloat(WCvsCS/sumOfCol2)).toFixed(3)
        let LCCvsCSValue=(parseFloat(LCCvsCS/sumOfCol2)).toFixed(3)
        let MCCvsCSValue=(parseFloat(MCCvsCS/sumOfCol2)).toFixed(3)
        // Third Column
        let ICvsWCValue=(parseFloat(ICvsWC/sumOfCol3)).toFixed(3)
        let CSvsWCValue=(parseFloat(CSvsWC/sumOfCol3)).toFixed(3)
        let WCvsWCValue=(parseFloat(WCvsWC/sumOfCol3)).toFixed(3)
        let LCCvsWCValue=(parseFloat(LCCvsWC/sumOfCol3)).toFixed(3)
        let MCCvsWCValue=(parseFloat(MCCvsWC/sumOfCol3)).toFixed(3)
        // Fourth Column
        let ICvsLCCValue=(parseFloat(ICvsLCC/sumOfCol4)).toFixed(3)
        let CSvsLCCValue=(parseFloat(CSvsLCC/sumOfCol4)).toFixed(3)
        let WCvsLCCValue=(parseFloat(WCvsLCC/sumOfCol4)).toFixed(3)
        let LCCvsLCCValue=(parseFloat(LCCvsLCC/sumOfCol4)).toFixed(3)
        let MCCvsLCCValue=(parseFloat(MCCvsLCC/sumOfCol4)).toFixed(3)
        // Fifth Column
        let ICvsMCCValue=(parseFloat(ICvsMCC/sumOfCol5)).toFixed(3)
        let CSvsMCCValue=(parseFloat(CSvsMCC/sumOfCol5)).toFixed(3)
        let WCvsMCCValue=(parseFloat(WCvsMCC/sumOfCol5)).toFixed(3)
        let LCCvsMCCValue=(parseFloat(LCCvsMCC/sumOfCol5)).toFixed(3)
        let MCCvsMCCValue=(parseFloat(MCCvsMCC/sumOfCol5)).toFixed(3)
        // Row averages calculation to get criteria weights
            let ICWeight=(parseFloat((parseFloat(ICvsICValue)+parseFloat(ICvsCSValue)+parseFloat(ICvsWCValue)+parseFloat(ICvsLCCValue)+parseFloat(ICvsMCCValue))/5)).toFixed(3)
            let CSWeight=(parseFloat((parseFloat(CSvsICValue)+parseFloat(CSvsCSValue)+parseFloat(CSvsWCValue)+parseFloat(CSvsLCCValue)+parseFloat(CSvsMCCValue))/5)).toFixed(3)
            let WCWeight=(parseFloat((parseFloat(WCvsICValue)+parseFloat(WCvsCSValue)+parseFloat(WCvsWCValue)+parseFloat(WCvsLCCValue)+parseFloat(WCvsMCCValue))/5)).toFixed(3)
            let LCCWeight=(parseFloat((parseFloat(LCCvsICValue)+parseFloat(LCCvsCSValue)+parseFloat(LCCvsWCValue)+parseFloat(LCCvsLCCValue)+parseFloat(LCCvsMCCValue))/5)).toFixed(3)
            let MCCWeight=(parseFloat((parseFloat(MCCvsICValue)+parseFloat(MCCvsCSValue)+parseFloat(MCCvsWCValue)+parseFloat(MCCvsLCCValue)+parseFloat(MCCvsMCCValue))/5)).toFixed(3)
            // Multiply Matrix × Weights
            let row1 = (parseFloat(ICvsIC)*parseFloat(ICWeight)+parseFloat(ICvsCS)*parseFloat(CSWeight)+parseFloat(ICvsWC)*parseFloat(WCWeight)+parseFloat(ICvsLCC)*parseFloat(LCCWeight)+parseFloat(ICvsMCC)*parseFloat(MCCWeight)).toFixed(3)
            let row2 = (parseFloat(CSvsIC)*parseFloat(ICWeight)+parseFloat(CSvsCS)*parseFloat(CSWeight)+parseFloat(CSvsWC)*parseFloat(WCWeight)+parseFloat(CSvsLCC)*parseFloat(LCCWeight)+parseFloat(CSvsMCC)*parseFloat(MCCWeight)).toFixed(3)
            let row3 = (parseFloat(WCvsIC)*parseFloat(ICWeight)+parseFloat(WCvsCS)*parseFloat(CSWeight)+parseFloat(WCvsWC)*parseFloat(WCWeight)+parseFloat(WCvsLCC)*parseFloat(LCCWeight)+parseFloat(WCvsMCC)*parseFloat(MCCWeight)).toFixed(3)
            let row4 = (parseFloat(LCCvsIC)*parseFloat(ICWeight)+parseFloat(LCCvsCS)*parseFloat(CSWeight)+parseFloat(LCCvsWC)*parseFloat(WCWeight)+parseFloat(LCCvsLCC)*parseFloat(LCCWeight)+parseFloat(LCCvsMCC)*parseFloat(MCCWeight)).toFixed(3)
            let row5 = (parseFloat(MCCvsIC)*parseFloat(ICWeight)+parseFloat(MCCvsCS)*parseFloat(CSWeight)+parseFloat(MCCvsWC)*parseFloat(WCWeight)+parseFloat(MCCvsLCC)*parseFloat(LCCWeight)+parseFloat(MCCvsMCC)*parseFloat(MCCWeight)).toFixed(3)
            // Divide by Weights
            let lambdaMax1=(parseFloat(row1)/parseFloat(ICWeight)).toFixed(3)
            let lambdaMax2=(parseFloat(row2)/parseFloat(CSWeight)).toFixed(3)
            let lambdaMax3=(parseFloat(row3)/parseFloat(WCWeight)).toFixed(3)
            let lambdaMax4=(parseFloat(row4)/parseFloat(LCCWeight)).toFixed(3)
            let lambdaMax5=(parseFloat(row5)/parseFloat(MCCWeight)).toFixed(3)
            // average of lambda max values
            let lambdaMax=(parseFloat((parseFloat(lambdaMax1)+parseFloat(lambdaMax2)+parseFloat(lambdaMax3)+parseFloat(lambdaMax4)+parseFloat(lambdaMax5))/5)).toFixed(3)
            // Consistency Index calculation
            let CI=(parseFloat((lambdaMax-5)/(5-1))).toFixed(3)
            // Consistency Ratio calculation (Random Index for n=5 is 1.12)
            let CR=(parseFloat(CI/1.12)).toFixed(3) 
            this.setState({isGenerateEconomic:true,CRC:CR})
    }

    // Environmental Criteria onChanges events 
    // first row events
    onEnterCMvsCWGRating=(event)=>{
        this.setState({CMvsCWG:event.target.value,CWGvsCM:parseFloat(1/event.target.value).toFixed(3),isCMvsCWG:false })
    }
    onEnterCMvsECRating=(event)=>{
        this.setState({CMvsEC:event.target.value,ECvsCM:parseFloat(1/event.target.value).toFixed(3),isCMvsEC:false })
    }   
    onEnterCMvsWURating=(event)=>{
        this.setState({CMvsWU:event.target.value,WUvsCM:parseFloat(1/event.target.value).toFixed(3),isCMvsWU:false })
    }
    onEnterCMvsLDRating=(event)=>{
        this.setState({CMvsLD:event.target.value,LDvsCM:parseFloat(1/event.target.value).toFixed(3),isCMvsLD:false })
    }
    // second row events
    onEnterCWGvsECRating=(event)=>{
        this.setState({CWGvsEC:event.target.value,ECvsCWG:parseFloat(1/event.target.value).toFixed(3),isCWGvsEC:false }) 
    }
    onEnterCWGvsWURating=(event)=>{
        this.setState({CWGvsWU:event.target.value,WUvsCWG:parseFloat(1/event.target.value).toFixed(3),isCWGvsWU:false }) 
    }
    onEnterCWGvsLDRating=(event)=>{
        this.setState({CWGvsLD:event.target.value,LDvsCWG:parseFloat(1/event.target.value).toFixed(3),isCWGvsLD:false }) 
    }
    // third row events
    onEnterECvsWURating=(event)=>{
        this.setState({ECvsWU:event.target.value,WUvsEC:parseFloat(1/event.target.value).toFixed(3),isECvsWU:false }) 
    }   
    onEnterECvsLDRating=(event)=>{
        this.setState({ECvsLD:event.target.value,LDvsEC:parseFloat(1/event.target.value).toFixed(3),isECvsLD:false }) 
    }
    // fourth row events
    onEnterWUvsLDRating=(event)=>{
        this.setState({WUvsLD:event.target.value,LDvsWU:parseFloat(1/event.target.value).toFixed(3),isWUvsLD:false }) 
    }

    // Environmental Criteria Consistency Ratio Check Logic 
    onEnvironmentalConsistencyRatioCheck=()=>{
        const {CMvsCM,CMvsCWG,CMvsEC,CMvsWU,CMvsLD,CWGvsCM,CWGvsCWG,CWGvsEC,CWGvsWU,CWGvsLD,ECvsCM,ECvsCWG,ECvsEC,ECvsWU,ECvsLD,WUvsCM,WUvsCWG,WUvsEC,WUvsWU,WUvsLD,LDvsCM,LDvsCWG,LDvsEC,LDvsWU,LDvsLD} = this.state
        let sumOfCol1=(parseFloat(CMvsCM)+parseFloat(CWGvsCM)+parseFloat(ECvsCM)+parseFloat(WUvsCM)+parseFloat(LDvsCM)).toFixed(3)
        let sumOfCol2=(parseFloat(CMvsCWG)+parseFloat(CWGvsCWG)+parseFloat(ECvsCWG)+parseFloat(WUvsCWG)+parseFloat(LDvsCWG)).toFixed(3)
        let sumOfCol3=(parseFloat(CMvsEC)+parseFloat(CWGvsEC)+parseFloat(ECvsEC)+parseFloat(WUvsEC)+parseFloat(LDvsEC)).toFixed(3)
        let sumOfCol4=(parseFloat(CMvsWU)+parseFloat(CWGvsWU)+parseFloat(ECvsWU)+parseFloat(WUvsWU)+parseFloat(LDvsWU)).toFixed(3)
        let sumOfCol5=(parseFloat(CMvsLD)+parseFloat(CWGvsLD)+parseFloat(ECvsLD)+parseFloat(WUvsLD)+parseFloat(LDvsLD)).toFixed(3)
        console.log("Sum of column 1: "+sumOfCol1)
        console.log("Sum of column 2: "+sumOfCol2)
        console.log("Sum of column 3: "+sumOfCol3)
        console.log("Sum of column 4: "+sumOfCol4)
        console.log("Sum of column 5: "+sumOfCol5)
        // individual criteria weights calculation
        // First Column
        let CMvsCMValue=(parseFloat(CMvsCM/sumOfCol1)).toFixed(3)
        let CWGvsCMValue=(parseFloat(CWGvsCM/sumOfCol1)).toFixed(3)
        let ECvsCMValue=(parseFloat(ECvsCM/sumOfCol1)).toFixed(3)
        let WUvsCMValue=(parseFloat(WUvsCM/sumOfCol1)).toFixed(3)
        let LDvsCMValue=(parseFloat(LDvsCM/sumOfCol1)).toFixed(3)
        // Second Column
        let CMvsCWGValue=(parseFloat(CMvsCWG/sumOfCol2)).toFixed(3)
        let CWGvsCWGValue=(parseFloat(CWGvsCWG/sumOfCol2)).toFixed(3)
        let ECvsCWGValue=(parseFloat(ECvsCWG/sumOfCol2)).toFixed(3)
        let WUvsCWGValue=(parseFloat(WUvsCWG/sumOfCol2)).toFixed(3)

        let LDvsCWGValue=(parseFloat(LDvsCWG/sumOfCol2)).toFixed(3)
        // Third Column
        let CMvsECValue=(parseFloat(CMvsEC/sumOfCol3)).toFixed(3)
        let CWGvsECValue=(parseFloat(CWGvsEC/sumOfCol3)).toFixed(3)
        let ECvsECValue=(parseFloat(ECvsEC/sumOfCol3)).toFixed(3)
        let WUvsECValue=(parseFloat(WUvsEC/sumOfCol3)).toFixed(3)
        let LDvsECValue=(parseFloat(LDvsEC/sumOfCol3)).toFixed(3)
        // Fourth Column
        let CMvsWUValue=(parseFloat(CMvsWU/sumOfCol4)).toFixed(3)
        let CWGvsWUValue=(parseFloat(CWGvsWU/sumOfCol4)).toFixed(3)
        let ECvsWUValue=(parseFloat(ECvsWU/sumOfCol4)).toFixed(3)
        let WUvsWUValue=(parseFloat(WUvsWU/sumOfCol4)).toFixed(3)

        let LDvsWUValue=(parseFloat(LDvsWU/sumOfCol4)).toFixed(3)
        // Fifth Column
        let CMvsLDValue=(parseFloat(CMvsLD/sumOfCol5)).toFixed(3)
        let CWGvsLDValue=(parseFloat(CWGvsLD/sumOfCol5)).toFixed(3)
        let ECvsLDValue=(parseFloat(ECvsLD/sumOfCol5)).toFixed(3)
        let WUvsLDValue=(parseFloat(WUvsLD/sumOfCol5)).toFixed(3)
        let LDvsLDValue=(parseFloat(LDvsLD/sumOfCol5)).toFixed(3)
        // Row averages calculation to get criteria weights
            let CMWeight=(parseFloat((parseFloat(CMvsCMValue)+parseFloat(CMvsCWGValue)+parseFloat(CMvsECValue)+parseFloat(CMvsWUValue)+parseFloat(CMvsLDValue))/5)).toFixed(3)
            let CWGWeight=(parseFloat((parseFloat(CWGvsCMValue)+parseFloat(CWGvsCWGValue)+parseFloat(CWGvsECValue)+parseFloat(CWGvsWUValue)+parseFloat(CWGvsLDValue))/5)).toFixed(3)
            let ECWeight=(parseFloat((parseFloat(ECvsCMValue)+parseFloat(ECvsCWGValue)+parseFloat(ECvsECValue)+parseFloat(ECvsWUValue)+parseFloat(ECvsLDValue))/5)).toFixed(3)
            let WUWeight=(parseFloat((parseFloat(WUvsCMValue)+parseFloat(WUvsCWGValue)+parseFloat(WUvsECValue)+parseFloat(WUvsWUValue)+parseFloat(WUvsLDValue))/5)).toFixed(3)
            let LDWeight=(parseFloat((parseFloat(LDvsCMValue)+parseFloat(LDvsCWGValue)+parseFloat(LDvsECValue)+parseFloat(LDvsWUValue)+parseFloat(LDvsLDValue))/5)).toFixed(3)
            // Multiply Matrix × Weights
            let row1 = (parseFloat(CMvsCM)*parseFloat(CMWeight)+parseFloat(CMvsCWG)*parseFloat(CWGWeight)+parseFloat(CMvsEC)*parseFloat(ECWeight)+parseFloat(CMvsWU)*parseFloat(WUWeight)+parseFloat(CMvsLD)*parseFloat(LDWeight)).toFixed(3)
            let row2 = (parseFloat(CWGvsCM)*parseFloat(CMWeight)+parseFloat(CWGvsCWG)*parseFloat(CWGWeight)+parseFloat(CWGvsEC)*parseFloat(ECWeight)+parseFloat(CWGvsWU)*parseFloat(WUWeight)+parseFloat(CWGvsLD)*parseFloat(LDWeight)).toFixed(3)
            let row3 = (parseFloat(ECvsCM)*parseFloat(CMWeight)+parseFloat(ECvsCWG)*parseFloat(CWGWeight)+parseFloat(ECvsEC)*parseFloat(ECWeight)+parseFloat(ECvsWU)*parseFloat(WUWeight)+parseFloat(ECvsLD)*parseFloat(LDWeight)).toFixed(3)
            let row4 = (parseFloat(WUvsCM)*parseFloat(CMWeight)+parseFloat(WUvsCWG)*parseFloat(CWGWeight)+parseFloat(WUvsEC)*parseFloat(ECWeight)+parseFloat(WUvsWU)*parseFloat(WUWeight)+parseFloat(WUvsLD)*parseFloat(LDWeight)).toFixed(3)
            let row5 = (parseFloat(LDvsCM)*parseFloat(CMWeight)+parseFloat(LDvsCWG)*parseFloat(CWGWeight)+parseFloat(LDvsEC)*parseFloat(ECWeight)+parseFloat(LDvsWU)*parseFloat(WUWeight)+parseFloat(LDvsLD)*parseFloat(LDWeight)).toFixed(3)
            // Divide by Weights
            let lambdaMax1=(parseFloat(row1)/parseFloat(CMWeight)).toFixed(3)
            let lambdaMax2=(parseFloat(row2)/parseFloat(CWGWeight)).toFixed(3)
            let lambdaMax3=(parseFloat(row3)/parseFloat(ECWeight)).toFixed(3)
            let lambdaMax4=(parseFloat(row4)/parseFloat(WUWeight)).toFixed(3)
            let lambdaMax5=(parseFloat(row5)/parseFloat(LDWeight)).toFixed(3)
            // average of lambda max values
            let lambdaMax=(parseFloat((parseFloat(lambdaMax1)+parseFloat(lambdaMax2)+parseFloat(lambdaMax3)+parseFloat(lambdaMax4)+parseFloat(lambdaMax5))/5)).toFixed(3)
            // Consistency Index calculation
            let CI=(parseFloat((lambdaMax-5)/(5-1))).toFixed(3)
            // Consistency Ratio calculation (Random Index for n=5 is 1.12)
            let CR=(parseFloat(CI/1.12)).toFixed(3) 
            this.setState({isGenerateEnvironmental:true,CRE:CR})
    }

    // Construction Methods Score to Criterias Handlers
    onMethodAndCriteriaCVvsWS=(event)=>{
        this.setState({CVvsWS:event.target.value})
    }
    onMethodAndCriteriaCVvsCD=(event)=>{
        this.setState({CVvsCD:event.target.value})
    }
    onMethodAndCriteriaCVvsJC=(event)=>{
        this.setState({CVvsJC:event.target.value})
    }
    onMethodAndCriteriaCVvsSD=(event)=>{
        this.setState({CVvsSD:event.target.value})
    }
    onMethodAndCriteriaCVvsPA=(event)=>{
        this.setState({CVvsPA:event.target.value})
    }
    onMethodAndCriteriaCVvsIC=(event)=>{
        this.setState({CVvsIC:event.target.value})
    }
    onMethodAndCriteriaCVvsCS=(event)=>{
        this.setState({CVvsCS:event.target.value})
    }
    onMethodAndCriteriaCVvsWC=(event)=>{
        this.setState({CVvsWC:event.target.value})
    }
    onMethodAndCriteriaCVvsLCC=(event)=>{
        this.setState({CVvsLCC:event.target.value})
    }
    onMethodAndCriteriaCVvsMCC=(event)=>{
        this.setState({CVvsMCC:event.target.value})
    }
    onMethodAndCriteriaCVvsCM=(event)=>{
        this.setState({CVvsCM:event.target.value})
    }
    onMethodAndCriteriaCVvsCWG=(event)=>{
        this.setState({CVvsCWG:event.target.value})
    }
    onMethodAndCriteriaCVvsEC=(event)=>{
        this.setState({CVvsEC:event.target.value})
    }
    onMethodAndCriteriaCVvsWU=(event)=>{
        this.setState({CVvsWU:event.target.value})
    }
    onMethodAndCriteriaCVvsLD=(event)=>{
        this.setState({CVvsLD:event.target.value})
    }

    // Precast Method Score to Criterias Handlers
    onMethodAndCriteriaPCvsWS=(event)=>{
        this.setState({PCvsWS:event.target.value})
    }
    onMethodAndCriteriaPCvsCD=(event)=>{
        this.setState({PCvsCD:event.target.value})
    }
    onMethodAndCriteriaPCvsJC=(event)=>{
        this.setState({PCvsJC:event.target.value})
    }
    onMethodAndCriteriaPCvsSD=(event)=>{
        this.setState({PCvsSD:event.target.value})
    }
    onMethodAndCriteriaPCvsPA=(event)=>{
        this.setState({PCvsPA:event.target.value})
    }
    onMethodAndCriteriaPCvsIC=(event)=>{
        this.setState({PCvsIC:event.target.value})
    }
    onMethodAndCriteriaPCvsCS=(event)=>{
        this.setState({PCvsCS:event.target.value})
    }
    onMethodAndCriteriaPCvsWC=(event)=>{
        this.setState({PCvsWC:event.target.value})
    }
    onMethodAndCriteriaPCvsLCC=(event)=>{
        this.setState({PCvsLCC:event.target.value})
    }
    onMethodAndCriteriaPCvsMCC=(event)=>{
        this.setState({PCvsMCC:event.target.value})
    }
    onMethodAndCriteriaPCvsCM=(event)=>{
        this.setState({PCvsCM:event.target.value})
    }
    onMethodAndCriteriaPCvsCWG=(event)=>{
        this.setState({PCvsCWG:event.target.value})
    }
    onMethodAndCriteriaPCvsEC=(event)=>{
        this.setState({PCvsEC:event.target.value})
    }
    onMethodAndCriteriaPCvsWU=(event)=>{
        this.setState({PCvsWU:event.target.value})
    }
    onMethodAndCriteriaPCvsLD=(event)=>{
        this.setState({PCvsLD:event.target.value})
    }

    // PF Method Score to Criterias Handlers
    onMethodAndCriteriaPFvsWS=(event)=>{
        this.setState({PFvsWS:event.target.value})
    }
    onMethodAndCriteriaPFvsCD=(event)=>{
        this.setState({PFvsCD:event.target.value})
    }
    onMethodAndCriteriaPFvsJC=(event)=>{
        this.setState({PFvsJC:event.target.value})
    }
    onMethodAndCriteriaPFvsSD=(event)=>{
        this.setState({PFvsSD:event.target.value})
    }
    onMethodAndCriteriaPFvsPA=(event)=>{
        this.setState({PFvsPA:event.target.value})
    }
    onMethodAndCriteriaPFvsIC=(event)=>{
        this.setState({PFvsIC:event.target.value})
    }
    onMethodAndCriteriaPFvsCS=(event)=>{
        this.setState({PFvsCS:event.target.value})
    }
    onMethodAndCriteriaPFvsWC=(event)=>{
        this.setState({PFvsWC:event.target.value})
    }
    onMethodAndCriteriaPFvsLCC=(event)=>{
        this.setState({PFvsLCC:event.target.value})
    }
    onMethodAndCriteriaPFvsMCC=(event)=>{
        this.setState({PFvsMCC:event.target.value})
    }
    onMethodAndCriteriaPFvsCM=(event)=>{
        this.setState({PFvsCM:event.target.value})
    }
    onMethodAndCriteriaPFvsCWG=(event)=>{
        this.setState({PFvsCWG:event.target.value})
    }
    onMethodAndCriteriaPFvsEC=(event)=>{
        this.setState({PFvsEC:event.target.value})
    }
    onMethodAndCriteriaPFvsWU=(event)=>{
        this.setState({PFvsWU:event.target.value})
    }
    onMethodAndCriteriaPFvsLD=(event)=>{
        this.setState({PFvsLD:event.target.value})
    }

    // Modular Method Score to Criterias Handlers
    onMethodAndCriteriaMvsWS=(event)=>{
        this.setState({MvsWS:event.target.value})
    }
    onMethodAndCriteriaMvsCD=(event)=>{
        this.setState({MvsCD:event.target.value})
    }
    onMethodAndCriteriaMvsJC=(event)=>{
        this.setState({MvsJC:event.target.value})
    }
    onMethodAndCriteriaMvsSD=(event)=>{
        this.setState({MvsSD:event.target.value})
    }
    onMethodAndCriteriaMvsPA=(event)=>{
        this.setState({MvsPA:event.target.value})
    }
    onMethodAndCriteriaMvsIC=(event)=>{
        this.setState({MvsIC:event.target.value})
    }
    onMethodAndCriteriaMvsCS=(event)=>{
        this.setState({MvsCS:event.target.value})
    }
    onMethodAndCriteriaMvsWC=(event)=>{
        this.setState({MvsWC:event.target.value})
    }
    onMethodAndCriteriaMvsLCC=(event)=>{
        this.setState({MvsLCC:event.target.value})
    }
    onMethodAndCriteriaMvsMCC=(event)=>{
        this.setState({MvsMCC:event.target.value})
    }
    onMethodAndCriteriaMvsCM=(event)=>{
        this.setState({MvsCM:event.target.value})
    }
    onMethodAndCriteriaMvsCWG=(event)=>{
        this.setState({MvsCWG:event.target.value})
    }
    onMethodAndCriteriaMvsEC=(event)=>{
        this.setState({MvsEC:event.target.value})
    }
    onMethodAndCriteriaMvsWU=(event)=>{
        this.setState({MvsWU:event.target.value})
    }
    onMethodAndCriteriaMvsLD=(event)=>{
        this.setState({MvsLD:event.target.value})
    }

    // 3D Printing Method Score to Criterias Handlers
    onMethodAndCriteriaAMvsWS=(event)=>{
        this.setState({AMvsWS:event.target.value})
    }
    onMethodAndCriteriaAMvsCD=(event)=>{
        this.setState({AMvsCD:event.target.value})
    }
    onMethodAndCriteriaAMvsJC=(event)=>{
        this.setState({AMvsJC:event.target.value})
    }
    onMethodAndCriteriaAMvsSD=(event)=>{
        this.setState({AMvsSD:event.target.value})
    }
    onMethodAndCriteriaAMvsPA=(event)=>{
        this.setState({AMvsPA:event.target.value})
    }
    onMethodAndCriteriaAMvsIC=(event)=>{
        this.setState({AMvsIC:event.target.value})
    }
    onMethodAndCriteriaAMvsCS=(event)=>{
        this.setState({AMvsCS:event.target.value})
    }
    onMethodAndCriteriaAMvsWC=(event)=>{
        this.setState({AMvsWC:event.target.value})
    }
    onMethodAndCriteriaAMvsLCC=(event)=>{
        this.setState({AMvsLCC:event.target.value})
    }
    onMethodAndCriteriaAMvsMCC=(event)=>{
        this.setState({AMvsMCC:event.target.value})
    }
    onMethodAndCriteriaAMvsCM=(event)=>{
        this.setState({AMvsCM:event.target.value})
    }
    onMethodAndCriteriaAMvsCWG=(event)=>{
        this.setState({AMvsCWG:event.target.value})
    }
    onMethodAndCriteriaAMvsEC=(event)=>{
        this.setState({AMvsEC:event.target.value})
    }
    onMethodAndCriteriaAMvsWU=(event)=>{
        this.setState({AMvsWU:event.target.value})
    }
    onMethodAndCriteriaAMvsLD=(event)=>{
        this.setState({AMvsLD:event.target.value})
    }


   // Success Message cose container 
  SuccessfulSurveyContainer=()=>{
    return (
     <div className="success-container">
          <div className="success-box">
            <h1 className="success-title">✅ Survey Completed</h1>
            <p className="success-text">
              Thank you for your time and valuable input.
            </p>
          </div>
        </div>
    )
   }

    // Form submission handler

    onSubmitForm=async (event,sortedObject,sortedEconomicObject,sortedEnvironmentalObject)=>{
        event.preventDefault()
        const {username,designation,institution,areaOfExpertise,experience,qualifications,
            WSvsWS,WSvsCD,WSvsSD,WSvsJC,WSvsPA,CDvsWS,CDvsCD,CDvsJC,CDvsSD,CDvsPA,JCvsWS,
            JCvsCD,JCvsJC,JCvsSD,JCvsPA,SDvsWS,SDvsCD,SDvsJC,SDvsSD,SDvsPA,PAvsWS,PAvsCD,
            PAvsJC,PAvsSD,PAvsPA,ICvsIC,ICvsCS,ICvsWC,ICvsLCC,ICvsMCC,CSvsIC,CSvsCS,CSvsWC,
            CSvsLCC,CSvsMCC,WCvsIC,WCvsCS,WCvsWC,WCvsLCC,WCvsMCC,LCCvsIC,LCCvsCS,LCCvsWC,
            LCCvsLCC,LCCvsMCC,MCCvsIC,MCCvsCS,MCCvsWC,MCCvsLCC,MCCvsMCC,
            CMvsCM,CMvsCWG,CMvsEC,CMvsWU,CMvsLD,CWGvsCM,CWGvsCWG,CWGvsEC,CWGvsWU,CWGvsLD,
            ECvsCM,ECvsCWG,ECvsEC,ECvsWU,ECvsLD,WUvsCM,WUvsCWG,WUvsEC,WUvsWU,WUvsLD,LDvsCM,
            LDvsCWG,LDvsEC,LDvsWU,LDvsLD,
            CVvsWS,CVvsCD,CVvsJC,CVvsSD,CVvsPA,CVvsIC,CVvsCS,CVvsWC,CVvsLCC,CVvsMCC,CVvsCM,CVvsCWG,CVvsEC,CVvsWU,CVvsLD,
            PCvsWS,PCvsCD,PCvsJC,PCvsSD,PCvsPA,PCvsIC,PCvsCS,PCvsWC,PCvsLCC,PCvsMCC,PCvsCM,PCvsCWG,PCvsEC,PCvsWU,PCvsLD,
            PFvsWS,PFvsCD,PFvsJC,PFvsSD,PFvsPA,PFvsIC,PFvsCS,PFvsWC,PFvsLCC,PFvsMCC,PFvsCM,PFvsCWG,PFvsEC,PFvsWU,PFvsLD,
            MvsWS,MvsCD,MvsJC,MvsSD,MvsPA,MvsIC,MvsCS,MvsWC,MvsLCC,MvsMCC,MvsCM,MvsCWG,MvsEC,MvsWU,MvsLD,
            AMvsWS,AMvsCD,AMvsJC,AMvsSD,AMvsPA,AMvsIC,AMvsCS,AMvsWC,AMvsLCC,AMvsMCC,AMvsCM,AMvsCWG,AMvsEC,AMvsWU,AMvsLD

            } =this.state

       
        
        if (username===""){
            this.setState({isUserErr:true,isUserErrMsg:"Required"})
            return ;
        }
        if (designation===""){
            this.setState({isUserErr:false,isDesignationErr:true,isDesignationErrMsg:"Required"})
            return ;
        }
        if (institution===""){
            this.setState({isDesignationErr:false,isInstitutionErr:true,isInstitutionErrMsg:"Required"})
            return ;
        }
        if (areaOfExpertise===""){
            this.setState({isInstitutionErr:false,isAreaOfExpertiseErr:true,isAreaOfExpertiseErrMsg:"Required"})
            return ;
        }
        if (experience===""){
            this.setState({isAreaOfExpertiseErr:false,isExperienceErr:true,isExperienceErrMsg:"Required"})
            return ;
        }
        if (qualifications===""){
            this.setState({isExperienceErr:false,isQualificationsErr:true,isQualificationsErrMsg:"Required"})
            return ;
        }
        
        else{
            this.setState({isUserErr:false,isDesignationErr:false,isInstitutionErr:false,isAreaOfExpertiseErr:false,isExperienceErr:false,isQualificationsErr:false}) 
        }

        

        const userDetails={
            fullName:username,
            jobTitle:designation,
            organization:institution,
            areaOfExpertise,
            yearsOfExperience:experience,
            qualification:qualifications,
        } 

        // validating the consistency of the pairwise comparison matrices for social, economic, and environmental criteria
        if ( (WSvsCD==="" || WSvsJC==="" ||  WSvsSD==="" || WSvsPA==="" || CDvsJC==="" || CDvsSD==="" || CDvsPA==="" || JCvsSD==="" || JCvsPA==="" || SDvsPA==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all pairwise comparison values for social criteria are entered."})
                return;
            }
            if ((parseFloat(WSvsCD)<0 || parseFloat(WSvsCD)>9 )|| (parseFloat(WSvsJC)<0 || parseFloat(WSvsJC)>9 )|| (parseFloat(WSvsSD)<0 || parseFloat(WSvsSD)>9 )|| (parseFloat(WSvsPA)<0 || parseFloat(WSvsPA)>9 )|| (parseFloat(CDvsJC)<0 || parseFloat(CDvsJC)>9 )|| (parseFloat(CDvsSD)<0 || parseFloat(CDvsSD)>9 )|| (parseFloat(CDvsPA)<0 || parseFloat(CDvsPA)>9 )|| (parseFloat(JCvsSD)<0 || parseFloat(JCvsSD)>9 )|| (parseFloat(JCvsPA)<0 || parseFloat(JCvsPA)>9 )|| (parseFloat(SDvsPA)<0 || parseFloat(SDvsPA)>9 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all pairwise comparison values for social criteria are between 1 and 9."})
                return;
            }
           if ( (ICvsCS==="" || ICvsWC==="" || ICvsLCC==="" || ICvsMCC==="" || CSvsWC==="" || CSvsLCC==="" || CSvsMCC==="" || WCvsLCC==="" || WCvsMCC==="" || LCCvsMCC==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all pairwise comparison values for economic criteria are entered."})
                return;
            }
            if ((parseFloat(ICvsCS)<0 || parseFloat(ICvsCS)>9 )|| (parseFloat(ICvsWC)<0 || parseFloat(ICvsWC)>9 )|| (parseFloat(ICvsLCC)<0 || parseFloat(ICvsLCC)>9 )|| (parseFloat(ICvsMCC)<0 || parseFloat(ICvsMCC)>9 )|| (parseFloat(CSvsWC)<0 || parseFloat(CSvsWC)>9 )|| (parseFloat(CSvsLCC)<0 || parseFloat(CSvsLCC)>9 )|| (parseFloat(CSvsMCC)<0 || parseFloat(CSvsMCC)>9 )|| (parseFloat(WCvsLCC)<0 || parseFloat(WCvsLCC)>9 )|| (parseFloat(WCvsMCC)<0 || parseFloat(WCvsMCC)>9 )|| (parseFloat(LCCvsMCC)<0 || parseFloat(LCCvsMCC)>9 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all pairwise comparison values for economic criteria are between 1 and 9."})
                return;
            }
            if ( (CMvsCWG==="" || CMvsEC==="" || CMvsWU==="" || CMvsLD==="" || CWGvsEC==="" || CWGvsWU==="" || CWGvsLD==="" || ECvsWU==="" || ECvsLD==="" || WUvsLD==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all pairwise comparison values for environmental criteria are entered."})
                return;
            }
            if ((parseFloat(CMvsCWG)<0 || parseFloat(CMvsCWG)>9 )|| (parseFloat(CMvsEC)<0 || parseFloat(CMvsEC)>9 )|| (parseFloat(CMvsWU)<0 || parseFloat(CMvsWU)>9 )|| (parseFloat(CMvsLD)<0 || parseFloat(CMvsLD)>9 )|| (parseFloat(CWGvsEC)<0 || parseFloat(CWGvsEC)>9 )|| (parseFloat(CWGvsWU)<0 || parseFloat(CWGvsWU)>9 )|| (parseFloat(CWGvsLD)<0 || parseFloat(CWGvsLD)>9 )|| (parseFloat(ECvsWU)<0 || parseFloat(ECvsWU)>9 )|| (parseFloat(ECvsLD)<0 || parseFloat(ECvsLD)>9 )|| (parseFloat(WUvsLD)<0 || parseFloat(WUvsLD)>9 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all pairwise comparison values for environmental criteria are between 1 and 9."})
                return;
            } 
            else{
                this.setState({isErr:false,isErrorMsg:""})
            }

            const workerSafetyData={
                mainCriteria:`Soical - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedObject)[0]} vs ${Object.keys(sortedObject)[0]}`,
                        value:WSvsWS
                    },{
                        name:`${Object.keys(sortedObject)[0]} vs ${Object.keys(sortedObject)[1]}`,
                        value:WSvsCD
                    }
                    ,{
                        name:`${Object.keys(sortedObject)[0]} vs ${Object.keys(sortedObject)[2]}`,
                        value:WSvsJC
                    },
                    {
                        name:`${Object.keys(sortedObject)[0]} vs ${Object.keys(sortedObject)[3]}`,
                        value:WSvsSD
                    },{
                        name:`${Object.keys(sortedObject)[0]} vs ${Object.keys(sortedObject)[4]}`,
                        value:WSvsPA
                    }

                ]

            }
            const communityData={
                mainCriteria:`Soical - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedObject)[1]} vs ${Object.keys(sortedObject)[0]}`,
                        value:CDvsWS
                    },
                    {
                        name:`${Object.keys(sortedObject)[1]} vs ${Object.keys(sortedObject)[1]}`,
                        value:CDvsCD
                    },
                    {
                        name:`${Object.keys(sortedObject)[1]} vs ${Object.keys(sortedObject)[2]}`,
                        value:CDvsJC
                    },
                    {
                        name:`${Object.keys(sortedObject)[1]} vs ${Object.keys(sortedObject)[3]}`,
                        value:CDvsSD
                    },
                    {
                        name:`${Object.keys(sortedObject)[1]} vs ${Object.keys(sortedObject)[4]}`,
                        value:CDvsPA
                    },
                ]

            }
             const jobData={
                mainCriteria:`Soical - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedObject)[2]} vs ${Object.keys(sortedObject)[0]}`,
                        value:JCvsWS
                    },
                    {
                        name:`${Object.keys(sortedObject)[2]} vs ${Object.keys(sortedObject)[1]}`,
                        value:JCvsCD
                    },
                    {
                        name:`${Object.keys(sortedObject)[2]} vs ${Object.keys(sortedObject)[2]}`,
                        value:JCvsJC
                    },
                    {
                        name:`${Object.keys(sortedObject)[2]} vs ${Object.keys(sortedObject)[3]}`,
                        value:JCvsSD
                    },
                    {
                        name:`${Object.keys(sortedObject)[2]} vs ${Object.keys(sortedObject)[4]}`,
                        value:JCvsPA
                    },
                ]

            }
            const skillData={
                mainCriteria:`Soical - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedObject)[3]} vs ${Object.keys(sortedObject)[0]}`,
                        value:SDvsWS
                    },
                    {
                        name:`${Object.keys(sortedObject)[3]} vs ${Object.keys(sortedObject)[1]}`,
                        value:SDvsCD
                    },
                    {
                        name:`${Object.keys(sortedObject)[3]} vs ${Object.keys(sortedObject)[2]}`,
                        value:SDvsJC
                    },
                    {
                        name:`${Object.keys(sortedObject)[3]} vs ${Object.keys(sortedObject)[3]}`,
                        value:SDvsSD
                    },
                    {
                        name:`${Object.keys(sortedObject)[3]} vs ${Object.keys(sortedObject)[4]}`,
                        value:SDvsPA
                    },
                ]

            }
            const publicData={
                mainCriteria:`Soical - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedObject)[4]} vs ${Object.keys(sortedObject)[0]}`,
                        value:PAvsWS
                    },
                    {
                        name:`${Object.keys(sortedObject)[4]} vs ${Object.keys(sortedObject)[1]}`,
                        value:PAvsCD
                    },
                    {
                        name:`${Object.keys(sortedObject)[4]} vs ${Object.keys(sortedObject)[2]}`,
                        value:PAvsJC
                    },
                    {
                        name:`${Object.keys(sortedObject)[4]} vs ${Object.keys(sortedObject)[3]}`,
                        value:PAvsSD
                    },
                    {
                        name:`${Object.keys(sortedObject)[4]} vs ${Object.keys(sortedObject)[4]}`,
                        value:PAvsPA
                    },
                ]

            }

            // Economic objects 

            const initialCE={
                mainCriteria:`Economic - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEconomicObject)[0]} vs ${Object.keys(sortedEconomicObject)[0]}`,
                        value:ICvsIC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[0]} vs ${Object.keys(sortedEconomicObject)[1]}`,
                        value:ICvsCS
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[0]} vs ${Object.keys(sortedEconomicObject)[2]}`,
                        value:ICvsWC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[0]} vs ${Object.keys(sortedEconomicObject)[3]}`,
                        value:ICvsLCC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[0]} vs ${Object.keys(sortedEconomicObject)[4]}`,
                        value:ICvsMCC
                    },

                ]

            }
              const ConstructionSE={
                mainCriteria:`Economic - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEconomicObject)[1]} vs ${Object.keys(sortedEconomicObject)[0]}`,
                        value:CSvsIC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[1]} vs ${Object.keys(sortedEconomicObject)[1]}`,
                        value:CSvsCS
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[1]} vs ${Object.keys(sortedEconomicObject)[2]}`,
                        value:CSvsWC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[1]} vs ${Object.keys(sortedEconomicObject)[3]}`,
                        value:CSvsLCC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[1]} vs ${Object.keys(sortedEconomicObject)[4]}`,
                        value:CSvsMCC
                    },

                ]

            }
            
              const workforceCE={
                mainCriteria:`Economic - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEconomicObject)[2]} vs ${Object.keys(sortedEconomicObject)[0]}`,
                        value:WCvsIC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[2]} vs ${Object.keys(sortedEconomicObject)[1]}`,
                        value:WCvsCS
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[2]} vs ${Object.keys(sortedEconomicObject)[2]}`,
                        value:WCvsWC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[2]} vs ${Object.keys(sortedEconomicObject)[3]}`,
                        value:WCvsLCC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[2]} vs ${Object.keys(sortedEconomicObject)[4]}`,
                        value:WCvsMCC
                    },

                ]

            }
            
              const MaintenanceCE={
                mainCriteria:`Economic - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEconomicObject)[3]} vs ${Object.keys(sortedEconomicObject)[0]}`,
                        value:LCCvsIC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[3]} vs ${Object.keys(sortedEconomicObject)[1]}`,
                        value:LCCvsCS
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[3]} vs ${Object.keys(sortedEconomicObject)[2]}`,
                        value:LCCvsWC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[3]} vs ${Object.keys(sortedEconomicObject)[3]}`,
                        value:LCCvsLCC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[3]} vs ${Object.keys(sortedEconomicObject)[4]}`,
                        value:LCCvsMCC
                    },

                ]

            }
            
              const MaterialCE={
                mainCriteria:`Economic - ${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEconomicObject)[4]} vs ${Object.keys(sortedEconomicObject)[0]}`,
                        value:MCCvsIC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[4]} vs ${Object.keys(sortedEconomicObject)[1]}`,
                        value:MCCvsCS
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[4]} vs ${Object.keys(sortedEconomicObject)[2]}`,
                        value:MCCvsWC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[4]} vs ${Object.keys(sortedEconomicObject)[3]}`,
                        value:MCCvsLCC
                    },
                     {
                        name:`${Object.keys(sortedEconomicObject)[4]} vs ${Object.keys(sortedEconomicObject)[4]}`,
                        value:MCCvsMCC
                    },

                ]

            }
            
            // Environmental objects 

            const carbonE={
                mainCriteria:`Environmental-${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEnvironmentalObject)[0]} vs ${Object.keys(sortedEnvironmentalObject)[0]}`,
                        value:CMvsCM
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[0]} vs ${Object.keys(sortedEnvironmentalObject)[1]}`,
                        value:CMvsCWG
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[0]} vs ${Object.keys(sortedEnvironmentalObject)[2]}`,
                        value:CMvsEC
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[0]} vs ${Object.keys(sortedEnvironmentalObject)[3]}`,
                        value:CMvsWU
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[0]} vs ${Object.keys(sortedEnvironmentalObject)[4]}`,
                        value:CMvsLD
                    },
                ]
            }
             const wasteE={
                mainCriteria:`Environmental-${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEnvironmentalObject)[1]} vs ${Object.keys(sortedEnvironmentalObject)[0]}`,
                        value:CWGvsCM
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[1]} vs ${Object.keys(sortedEnvironmentalObject)[1]}`,
                        value:CWGvsCWG
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[1]} vs ${Object.keys(sortedEnvironmentalObject)[2]}`,
                        value:CWGvsEC
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[1]} vs ${Object.keys(sortedEnvironmentalObject)[3]}`,
                        value:CWGvsWU
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[1]} vs ${Object.keys(sortedEnvironmentalObject)[4]}`,
                        value:CWGvsLD
                    },
                ]
            }
             const energyE={
                mainCriteria:`Environmental-${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEnvironmentalObject)[2]} vs ${Object.keys(sortedEnvironmentalObject)[0]}`,
                        value:ECvsCM
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[2]} vs ${Object.keys(sortedEnvironmentalObject)[1]}`,
                        value:ECvsCWG
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[2]} vs ${Object.keys(sortedEnvironmentalObject)[2]}`,
                        value:ECvsEC
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[2]} vs ${Object.keys(sortedEnvironmentalObject)[3]}`,
                        value:ECvsWU
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[2]} vs ${Object.keys(sortedEnvironmentalObject)[4]}`,
                        value:ECvsLD
                    },
                ]
            }
             const waterE={
                mainCriteria:`Environmental-${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEnvironmentalObject)[3]} vs ${Object.keys(sortedEnvironmentalObject)[0]}`,
                        value:WUvsCM
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[3]} vs ${Object.keys(sortedEnvironmentalObject)[1]}`,
                        value:WUvsCWG
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[3]} vs ${Object.keys(sortedEnvironmentalObject)[2]}`,
                        value:WUvsEC
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[3]} vs ${Object.keys(sortedEnvironmentalObject)[3]}`,
                        value:WUvsWU
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[3]} vs ${Object.keys(sortedEnvironmentalObject)[4]}`,
                        value:WUvsLD
                    },
                ]
            }
             const landE={
                mainCriteria:`Environmental-${uuidv4()}`,
                subCriteria:[
                    {
                        name:`${Object.keys(sortedEnvironmentalObject)[4]} vs ${Object.keys(sortedEnvironmentalObject)[0]}`,
                        value:LDvsCM
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[4]} vs ${Object.keys(sortedEnvironmentalObject)[1]}`,
                        value:LDvsCWG
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[4]} vs ${Object.keys(sortedEnvironmentalObject)[2]}`,
                        value:LDvsEC
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[4]} vs ${Object.keys(sortedEnvironmentalObject)[3]}`,
                        value:LDvsWU
                    },
                     {
                        name:`${Object.keys(sortedEnvironmentalObject)[4]} vs ${Object.keys(sortedEnvironmentalObject)[4]}`,
                        value:LDvsLD
                    },
                ]
            }

             
            // validating of construction methods scores against criteria to ensure they are between 1 and 9
            if ( (CVvsWS==="" || CVvsCD==="" || CVvsJC==="" || CVvsSD==="" || CVvsPA==="" || CVvsIC==="" || CVvsCS==="" || CVvsWC==="" || CVvsLCC==="" || CVvsMCC==="" || CVvsCM==="" || CVvsCWG==="" || CVvsEC==="" || CVvsWU==="" || CVvsLD==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for conventional method are entered."})
                return
            }
            if ( (PCvsWS==="" || PCvsCD==="" || PCvsJC==="" || PCvsSD==="" || PCvsPA==="" || PCvsIC==="" || PCvsCS==="" || PCvsWC==="" || PCvsLCC==="" || PCvsMCC==="" || PCvsCM==="" || PCvsCWG==="" || PCvsEC==="" || PCvsWU==="" || PCvsLD==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for Precast Method are entered."})
                return;
            }
                if ( (PFvsWS==="" || PFvsCD==="" || PFvsJC==="" || PFvsSD==="" || PFvsPA==="" || PFvsIC==="" || PFvsCS==="" || PFvsWC==="" || PFvsLCC==="" || PFvsMCC==="" || PFvsCM==="" || PFvsCWG==="" || PFvsEC==="" || PFvsWU==="" || PFvsLD==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for Prefabrication Method are entered."})
                return;
            }  
            if ( (MvsWS==="" || MvsCD==="" || MvsJC==="" || MvsSD==="" || MvsPA==="" || MvsIC==="" || MvsCS==="" || MvsWC==="" || MvsLCC==="" || MvsMCC==="" || MvsCM==="" || MvsCWG==="" || MvsEC==="" || MvsWU==="" || MvsLD==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for Modular Method are entered."})
                return;
            }
             if ( (AMvsWS==="" || AMvsCD==="" || AMvsJC==="" || AMvsSD==="" || AMvsPA==="" || AMvsIC==="" || AMvsCS==="" || AMvsWC==="" || AMvsLCC==="" || AMvsMCC==="" || AMvsCM==="" || AMvsCWG==="" || AMvsEC==="" || AMvsWU==="" || AMvsLD==="")){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for 3D Printing Method are entered."})
                return;
            }
            if ((parseFloat(CVvsWS)<0 || parseFloat(CVvsWS)>5 )|| (parseFloat(CVvsCD)<0 || parseFloat(CVvsCD)>5 )|| (parseFloat(CVvsJC)<0 || parseFloat(CVvsJC)>5 )|| (parseFloat(CVvsSD)<0 || parseFloat(CVvsSD)>5 )|| (parseFloat(CVvsPA)<0 || parseFloat(CVvsPA)>5 )|| (parseFloat(CVvsIC)<0 || parseFloat(CVvsIC)>5 )|| (parseFloat(CVvsCS)<0 || parseFloat(CVvsCS)>5 )|| (parseFloat(CVvsWC)<0 || parseFloat(CVvsWC)>5 )|| (parseFloat(CVvsLCC)<0 || parseFloat(CVvsLCC)>5 )|| (parseFloat(CVvsMCC)<0 || parseFloat(CVvsMCC)>5 )|| (parseFloat(CVvsCM)<0 || parseFloat(CVvsCM)>5 )|| (parseFloat(CVvsCWG)<0 || parseFloat(CVvsCWG)>5 )|| (parseFloat(CVvsEC)<0 || parseFloat(CVvsEC)>5 )|| (parseFloat(CVvsWU)<0 || parseFloat(CVvsWU)>5 )|| (parseFloat(CVvsLD)<0 || parseFloat(CVvsLD)>5 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for conventional method are between 1 and 5."})
                return;
            }
            
            if ((parseFloat(PCvsWS)<0 || parseFloat(PCvsWS)>5 )|| (parseFloat(PCvsCD)<0 || parseFloat(PCvsCD)>5 )|| (parseFloat(PCvsJC)<0 || parseFloat(PCvsJC)>5 )|| (parseFloat(PCvsSD)<0 || parseFloat(PCvsSD)>5 )|| (parseFloat(PCvsPA)<0 || parseFloat(PCvsPA)>5 )|| (parseFloat(PCvsIC)<0 || parseFloat(PCvsIC)>5 )|| (parseFloat(PCvsCS)<0 || parseFloat(PCvsCS)>5 )|| (parseFloat(PCvsWC)<0 || parseFloat(PCvsWC)>5 )|| (parseFloat(PCvsLCC)<0 || parseFloat(PCvsLCC)>5 )|| (parseFloat(PCvsMCC)<0 || parseFloat(PCvsMCC)>5 )|| (parseFloat(PCvsCM)<0 || parseFloat(PCvsCM)>5 )|| (parseFloat(PCvsCWG)<0 || parseFloat(PCvsCWG)>5 )|| (parseFloat(PCvsEC)<0 || parseFloat(PCvsEC)>5 )|| (parseFloat(PCvsWU)<0 || parseFloat(PCvsWU)>5 )|| (parseFloat(PCvsLD)<0 || parseFloat(PCvsLD)>5 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for Precast method are between 1 and 5."})
                return;
            }
          
          
            if ((parseFloat(PFvsWS)<0 || parseFloat(PFvsWS)>5 )|| (parseFloat(PFvsCD)<0 || parseFloat(PFvsCD)>5 )|| (parseFloat(PFvsJC)<0 || parseFloat(PFvsJC)>5 )|| (parseFloat(PFvsSD)<0 || parseFloat(PFvsSD)>5 )|| (parseFloat(PFvsPA)<0 || parseFloat(PFvsPA)>5 )|| (parseFloat(PFvsIC)<0 || parseFloat(PFvsIC)>5 )|| (parseFloat(PFvsCS)<0 || parseFloat(PFvsCS)>5 )|| (parseFloat(PFvsWC)<0 || parseFloat(PFvsWC)>5 )|| (parseFloat(PFvsLCC)<0 || parseFloat(PFvsLCC)>5 )|| (parseFloat(PFvsMCC)<0 || parseFloat(PFvsMCC)>5 )|| (parseFloat(PFvsCM)<0 || parseFloat(PFvsCM)>5 )|| (parseFloat(PFvsCWG)<0 || parseFloat(PFvsCWG)>5 )|| (parseFloat(PFvsEC)<0 || parseFloat(PFvsEC)>5 )|| (parseFloat(PFvsWU)<0 || parseFloat(PFvsWU)>5 )|| (parseFloat(PFvsLD)<0 || parseFloat(PFvsLD)>5 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for Prefabrication Method are between 1 and 5."})
                return;
            }
            
            if ((parseFloat(MvsWS)<0 || parseFloat(MvsWS)>5 )|| (parseFloat(MvsCD)<0 || parseFloat(MvsCD)>5 )|| (parseFloat(MvsJC)<0 || parseFloat(MvsJC)>5 )|| (parseFloat(MvsSD)<0 || parseFloat(MvsSD)>5 )|| (parseFloat(MvsPA)<0 || parseFloat(MvsPA)>5 )|| (parseFloat(MvsIC)<0 || parseFloat(MvsIC)>5 )|| (parseFloat(MvsCS)<0 || parseFloat(MvsCS)>5 )|| (parseFloat(MvsWC)<0 || parseFloat(MvsWC)>5 )|| (parseFloat(MvsLCC)<0 || parseFloat(MvsLCC)>5 )|| (parseFloat(MvsMCC)<0 || parseFloat(MvsMCC)>5 )|| (parseFloat(MvsCM)<0 || parseFloat(MvsCM)>5 )|| (parseFloat(MvsCWG)<0 || parseFloat(MvsCWG)>5 )|| (parseFloat(MvsEC)<0 || parseFloat(MvsEC)>5 )|| (parseFloat(MvsWU)<0 || parseFloat(MvsWU)>5 )|| (parseFloat(MvsLD)<0 || parseFloat(MvsLD)>5 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for Modular Method are between 1 and 5."})
                return;
            }
           
            if ((parseFloat(AMvsWS)<0 || parseFloat(AMvsWS)>5 )|| (parseFloat(AMvsCD)<0 || parseFloat(AMvsCD)>5 )|| (parseFloat(AMvsJC)<0 || parseFloat(AMvsJC)>5 )|| (parseFloat(AMvsSD)<0 && parseFloat(AMvsSD)>5 )|| (parseFloat(AMvsPA)<0 || parseFloat(AMvsPA)>5 )|| (parseFloat(AMvsIC)<0 || parseFloat(AMvsIC)>5 )|| (parseFloat(AMvsCS)<0 || parseFloat(AMvsCS)>5 )|| (parseFloat(AMvsWC)<0 || parseFloat(AMvsWC)>5 )|| (parseFloat(AMvsLCC)<0 || parseFloat(AMvsLCC)>5 )|| (parseFloat(AMvsMCC)<0 || parseFloat(AMvsMCC)>5 )|| (parseFloat(AMvsCM)<0 || parseFloat(AMvsCM)>5 )|| (parseFloat(AMvsCWG)<0 || parseFloat(AMvsCWG)>5 )|| (parseFloat(AMvsEC)<0 || parseFloat(AMvsEC)>5 )|| (parseFloat(AMvsWU)<0 || parseFloat(AMvsWU)>5 )|| (parseFloat(AMvsLD)<0 || parseFloat(AMvsLD)>5 )){
                this.setState({isErr:true,isErrorMsg:"Please ensure all scores for 3D Printing Method are between 1 and 5."})
                return;
            }
            else{
                this.setState({isErr:false,isErrorMsg:""})
            }

            // Convential object 
            const conventionalMethod={
                constructionMethod:`Conventional - ${uuidv4()}`,
                subCriteriaScore:[
                    {
                        name:"Worker safety and health",
                        value:CVvsWS
                    },
                    {
                        name:"Community disruption",
                        value:CVvsCD
                    },
                    {
                        name:"Job creation",
                        value:CVvsJC
                    },
                    {
                        name:"Skill development",
                        value:CVvsSD
                    },
                    {
                        name:"Public acceptance",
                        value:CVvsPA
                    },
                    {
                        name:"Initial / capital cost",
                        value:CVvsIC
                    },
                    {
                        name:"Construction speed",
                        value:CVvsCS
                    },
                    {
                        name:"Labour / workforce cost",
                        value:CVvsWC
                    },
                    {
                        name:"Maintenance & life-cycle cost",
                        value:CVvsLCC
                    },
                    {
                        name:"Material wastage cost",
                        value:CVvsMCC
                    },
                    {
                        name:"Carbon emissions / CO2 footprint",
                        value:CVvsCM
                    },
                    {
                        name:"Construction waste generation",
                        value:CVvsCWG
                    },
                    {
                        name:"Energy consumption",
                        value:CVvsEC
                    },
                    {
                        name:"Water usage",
                        value:CVvsWU
                    },
                    {
                        name:"Land disturbance",
                        value:CVvsLD
                    }
                ]
            }
             const precastMethod={
                constructionMethod:`Precast - ${uuidv4()}`,
                subCriteriaScore:[
                    {
                        name:"Worker safety and health",
                        value:PCvsWS
                    },
                    {
                        name:"PCommunity disruption",
                        value:PCvsCD
                    },
                    {
                        name:"Job creation",
                        value:PCvsJC
                    },
                    {
                        name:"Skill development",
                        value:PCvsSD
                    },
                    {
                        name:"Public acceptance",
                        value:PCvsPA
                    },
                    {
                        name:"Initial / capital cost",
                        value:PCvsIC
                    },
                    {
                        name:"Construction speed",
                        value:PCvsCS
                    },
                    {
                        name:"Labour / workforce cost",
                        value:PCvsWC
                    },
                    {
                        name:"Maintenance & life-cycle cost",
                        value:PCvsLCC
                    },
                    {
                        name:"Material wastage cost",
                        value:PCvsMCC
                    },
                    {
                        name:"Carbon emissions / CO2 footprint",
                        value:PCvsCM
                    },
                    {
                        name:"Construction waste generation",
                        value:PCvsCWG
                    },
                    {
                        name:"Energy consumption",
                        value:PCvsEC
                    },
                    {
                        name:"Water usage",
                        value:PCvsWU
                    },
                    {
                        name:"Land disturbance",
                        value:PCvsLD
                    }
                ]
            }
             const fabricationMethod={
                constructionMethod:`Prefabrication - ${uuidv4()}`,
                subCriteriaScore:[
                    {
                        name:"Worker safety and health",
                        value:PFvsWS
                    },
                    {
                        name:"Community disruption",
                        value:PFvsCD
                    },
                    {
                        name:"Job creation",
                        value:PFvsJC
                    },
                    {
                        name:"Skill development",
                        value:PFvsSD
                    },
                    {
                        name:"Public acceptance",
                        value:PFvsPA
                    },
                    {
                        name:"Initial / capital cost",
                        value:PFvsIC
                    },
                    {
                        name:"Construction speed",
                        value:PFvsCS
                    },
                    {
                        name:"Labour / workforce cost",
                        value:PFvsWC
                    },
                    {
                        name:"Maintenance & life-cycle cost",
                        value:PFvsLCC
                    },
                    {
                        name:"Material wastage cost",
                        value:PFvsMCC
                    },
                    {
                        name:"Carbon emissions / CO2 footprint",
                        value:PFvsCM
                    },
                    {
                        name:"Construction waste generation",
                        value:PFvsCWG
                    },
                    {
                        name:"Energy consumption",
                        value:PFvsEC
                    },
                    {
                        name:"Water usage",
                        value:PFvsWU
                    },
                    {
                        name:"Land disturbance",
                        value:PFvsLD
                    }
                ]
            }
             const modularMethod={
               constructionMethod:`Modular - ${uuidv4()}`,
                subCriteriaScore:[
                    {
                        name:"Worker safety and health",
                        value:MvsWS
                    },
                    {
                        name:"Community disruption",
                        value:MvsCD
                    },
                    {
                        name:"Job creation",
                        value:MvsJC
                    },
                    {
                        name:"Skill development",
                        value:MvsSD
                    },
                    {
                        name:"Public acceptance",
                        value:MvsPA
                    },
                    {
                        name:"Initial / capital cost",
                        value:MvsIC
                    },
                    {
                        name:"Construction speed",
                        value:MvsCS
                    },
                    {
                        name:"Labour / workforce cost",
                        value:MvsWC
                    },
                    {
                        name:"Maintenance & life-cycle cost",
                        value:MvsLCC
                    },
                    {
                        name:"Material wastage cost",
                        value:MvsMCC
                    },
                    {
                        name:"Carbon emissions / CO2 footprint",
                        value:MvsCM
                    },
                    {
                        name:"Construction waste generation",
                        value:MvsCWG
                    },
                    {
                        name:"Energy consumption",
                        value:MvsEC
                    },
                    {
                        name:"Water usage",
                        value:MvsWU
                    },
                    {
                        name:"Land disturbance",
                        value:MvsLD
                    }
                ]
            }
             const threeDPMethod={
                constructionMethod:`3D Printing - ${uuidv4()}`,
                subCriteriaScore:[
                    {
                        name:"Worker safety and health",
                        value:AMvsWS
                    },
                    {
                        name:"Community disruption",
                        value:AMvsCD
                    },
                    {
                        name:"Job creation",
                        value:AMvsJC
                    },
                    {
                        name:"Skill development",
                        value:AMvsSD
                    },
                    {
                        name:"Public acceptance",
                        value:AMvsPA
                    },
                    {
                        name:"Initial / capital cost",
                        value:AMvsIC
                    },
                    {
                        name:"Construction speed",
                        value:AMvsCS
                    },
                    {
                        name:"Labour / workforce cost",
                        value:AMvsWC
                    },
                    {
                        name:"Maintenance & life-cycle cost",
                        value:AMvsLCC
                    },
                    {
                        name:"Material wastage cost",
                        value:AMvsMCC
                    },
                    {
                        name:"Carbon emissions / CO2 footprint",
                        value:AMvsCM
                    },
                    {
                        name:"Construction waste generation",
                        value:AMvsCWG
                    },
                    {
                        name:"Energy consumption",
                        value:AMvsEC
                    },
                    {
                        name:"Water usage",
                        value:AMvsWU
                    },
                    {
                        name:"Land disturbance",
                        value:AMvsLD
                    }
                ]
            }

            // send the UserProfile Details API request
             const url=`https://mcda-project-f09a.onrender.com/api/userProfile`
             console.log(url)
             const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userDetails)
        }
        const response=await fetch(url,options);
        const data=await response.json();
        console.log(data)   

            // send the Pairwise Criteria  Details API request
             const urlAddCriteria=`https://mcda-project-f09a.onrender.com/api/add-criteria` 
             const criteriaOptions={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({data:[workerSafetyData,communityData,jobData,skillData,publicData,initialCE,ConstructionSE,workforceCE,MaintenanceCE,MaterialCE,carbonE,wasteE,energyE,waterE,landE]})
        }
        const responseCriteria=await fetch(urlAddCriteria,criteriaOptions);
        const criteriaMessage=await responseCriteria.json();
        console.log(criteriaMessage)  

            // send the Pairwise Criteria  Details API request
        const urlOfAddMethods=`https://mcda-project-f09a.onrender.com/api/addConstruction` 
        const optionsCM={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({data:[conventionalMethod,precastMethod,fabricationMethod,modularMethod,threeDPMethod]})
        }
        const responseMethod=await fetch(urlOfAddMethods,optionsCM);
        const methodMessage=await responseMethod.json();
        console.log(methodMessage)  

        this.setState({isSubmitted:true}) 
     
    }

    handleClick = (criterion, value) => {
    const { selectedValues } = this.state;

    // Toggle OFF if same value clicked again
    if (selectedValues[criterion] === value) {
      const updated = { ...selectedValues };
      delete updated[criterion];

      this.setState({
        selectedValues: updated,
        error: ""
      });
      return;
    }

    // Check duplicate value
    const alreadySelected = Object.entries(selectedValues).find(
      ([key, val]) => val === value && key !== criterion
    );

    if (alreadySelected) {
      this.setState({
        error: `Rank ${value} already selected for "${alreadySelected[0]}" ❌`
      });
      return;
    }

    // Update state
    this.setState({
      selectedValues: {
        ...selectedValues,
        [criterion]: value
      },
      error: ""
    });
                   
   };
   // update all resources

   // Economic criteria handle
     handleClickE = (criterion, value) => {
    const { selectedValuesE } = this.state;

    // Toggle OFF if same value clicked again
    if (selectedValuesE[criterion] === value) {
      const updated = { ...selectedValuesE };
      delete updated[criterion];

      this.setState({
        selectedValuesE: updated,
        errorE: ""
      });
      return;
    }

    // Check duplicate value
    const alreadySelected = Object.entries(selectedValuesE).find(
      ([key, val]) => val === value && key !== criterion
    );

    if (alreadySelected) {
      this.setState({
        errorE: `Rank ${value} already selected for "${alreadySelected[0]}" ❌`
      });
      return;
    }

    // Update state
    this.setState({
      selectedValuesE: {
        ...selectedValuesE,
        [criterion]: value
      },
      errorE: ""
    });
   };
   // Evironmental criteria
     handleClickEv = (criterion, value) => {
    const { selectedValuesEv } = this.state;

    // Toggle OFF if same value clicked again
    if (selectedValuesEv[criterion] === value) {
      const updated = { ...selectedValuesEv };
      delete updated[criterion];

      this.setState({
        selectedValuesEv: updated,
        errorEv: ""
      });
      return;
    }

    // Check duplicate value
    const alreadySelected = Object.entries(selectedValuesEv).find(
      ([key, val]) => val === value && key !== criterion
    );

    if (alreadySelected) {
      this.setState({
        errorEv: `Rank ${value} already selected for "${alreadySelected[0]}" ❌`
      });
      return;
    }

    // Update state
    this.setState({
      selectedValuesEv: {
        ...selectedValuesEv,
        [criterion]: value
      },
      errorEv: ""
    });
   };
  

    render(){
                const {username,designation,institution,areaOfExpertise,experience,
                    qualifications,isErr,isErrorMsg,isUserErr,isUserErrMsg,isDesignationErr,
                    isDesignationErrMsg,isInstitutionErr,isInstitutionErrMsg,
                    isAreaOfExpertiseErr,isAreaOfExpertiseErrMsg,isExperienceErr,
                    isExperienceErrMsg,isQualificationsErr,isQualificationsErrMsg,
                    isGenerate,WSvsWS,WSvsCD,WSvsJC,WSvsSD,WSvsPA,CDvsWS,CDvsCD,CDvsJC,
                    CDvsSD,CDvsPA,JCvsWS,JCvsCD,JCvsJC,JCvsSD,JCvsPA,SDvsWS,SDvsCD,SDvsJC,
                    SDvsSD,SDvsPA,PAvsWS,PAvsCD,PAvsJC,PAvsSD,PAvsPA,CR,isWSvsCD,isWSvsJC,
                    isWSvsSD,isWSvsPA,isCDvsJC,isCDvsSD,isCDvsPA,isJCvsSD,isJCvsPA,isSDvsPA,
                    ICvsIC,ICvsCS,ICvsWC,ICvsLCC,ICvsMCC,isICvsCS,isICvsWC,isICvsLCC,isICvsMCC,
                    CSvsIC,CSvsCS,CSvsWC,CSvsLCC,CSvsMCC,isCSvsWC,isCSvsLCC,isCSvsMCC,WCvsIC,
                    WCvsCS,WCvsWC,WCvsLCC,WCvsMCC,isWCvsLCC,isWCvsMCC,LCCvsIC,LCCvsCS,LCCvsWC,
                    LCCvsLCC,LCCvsMCC,isLCCvsMCC,MCCvsIC,MCCvsCS,MCCvsWC,MCCvsLCC,MCCvsMCC,CRC,
                isGenerateEconomic,CMvsCM,CMvsCWG,CMvsEC,CMvsWU,CMvsLD,isCMvsCWG,isCMvsEC,isCMvsWU,
                isCMvsLD,CWGvsCM,CWGvsCWG,CWGvsEC,CWGvsWU,CWGvsLD,isCWGvsEC,isCWGvsWU,isCWGvsLD,ECvsCM,
                ECvsCWG,ECvsEC,ECvsWU,ECvsLD,isECvsWU,isECvsLD,WUvsCM,WUvsCWG,WUvsEC,WUvsWU,WUvsLD,
                isWUvsLD,LDvsCM,LDvsCWG,LDvsEC,LDvsWU,LDvsLD,CRE,isGenerateEnvironmental,CVvsWS,CVvsCD,
                CVvsJC,CVvsSD,CVvsPA,CVvsIC,CVvsCS,CVvsWC,CVvsLCC,CVvsMCC,CVvsCM,CVvsCWG,CVvsEC,
                CVvsWU,CVvsLD,PCvsWS,PCvsCD,PCvsJC,PCvsSD,PCvsPA,PCvsIC,PCvsCS,PCvsWC,PCvsLCC,PCvsMCC,PCvsCM,
                PCvsCWG,PCvsEC,PCvsWU,PCvsLD,PFvsWS,PFvsCD,PFvsJC,PFvsSD,PFvsPA,PFvsIC,PFvsCS,
                PFvsWC,PFvsLCC,PFvsMCC,PFvsCM,PFvsCWG,PFvsEC,PFvsWU,PFvsLD,MvsWS,MvsCD,MvsJC,MvsSD,MvsPA,
                MvsIC,MvsCS,MvsWC,MvsLCC,MvsMCC,MvsCM,MvsCWG,MvsEC,MvsWU,MvsLD,AMvsWS,AMvsCD,AMvsJC,
                AMvsSD,AMvsPA,AMvsIC,AMvsCS,AMvsWC,AMvsLCC,AMvsMCC,AMvsCM,AMvsCWG,AMvsEC,AMvsWU,
                AMvsLD,isSubmitted,criteria, selectedValues, error,criteriaE,criteriaEv,
                selectedValuesE,selectedValuesEv,errorE,errorEv,} = this.state   
                const userBorder=isUserErr?"error-input-border":null;
                const designationBorder=isDesignationErr?"error-input-border":null;
                const institutionBorder=isInstitutionErr?"error-input-border":null;
                const areaOfExpertiseBorder=isAreaOfExpertiseErr?"error-input-border":null;
                const experienceBorder=isExperienceErr?"error-input-border":null;
                const qualificationsBorder=isQualificationsErr?"error-input-border":null;
                //console.log(selectedValues)
                const sortedObject = Object.fromEntries(
                    Object.entries(selectedValues).sort((a, b) => Number(a[1]) - Number(b[1]))
                    );
                const sortedEconomicObject = Object.fromEntries(
                Object.entries(selectedValuesE).sort((a, b) => Number(a[1]) - Number(b[1]))
                );
                const sortedEnvironmentalObject = Object.fromEntries(
                Object.entries(selectedValuesEv).sort((a, b) => Number(a[1]) - Number(b[1]))
                );

                
                
        return (
            <>{ !isSubmitted?
                <div className="lg-home-page-container"  >

                    <form className="lg-register-form-container" onSubmit={(event) =>
                                    this.onSubmitForm(
                                        event,
                                        sortedObject,
                                        sortedEconomicObject,
                                        sortedEnvironmentalObject
                                    )
                                    }>
                        <div>
                            <div className="intro-container">

  <h1 className="main-title">
    Construction Method Selection Using MCDA – Expert Evaluation Form
  </h1>

  <div className="intro-card">
    <h2 className="section-title">Project Introduction</h2>

    <p className="description">
      We are conducting a study to evaluate and compare various construction
      methods, including <span>conventional</span>, <span>precast</span>,
      <span> prefabrication</span>, <span>modular construction</span>, and
      <span> 3D printing</span>, using a Multi-Criteria Decision Analysis (MCDA)
      approach.
    </p>

    <p className="description">
      This survey is specifically designed for experienced professionals in the
      construction and engineering sectors. Your expertise and practical
      insights are essential in helping us assess these construction methods
      across key dimensions such as <span>economic feasibility</span>,
      <span> environmental impact</span>, and <span>social considerations</span>.
    </p>

    <p className="description highlight-box">
      We kindly request you to provide your expert judgment by rating and
      comparing the given criteria based on your knowledge and professional
      experience. Your responses will remain strictly confidential and will be
      used solely for academic and research purposes.
    </p>

  </div>
</div>
                            <div class="process-container">
                            <h1 class="title">Form Filling Steps</h1>

                            <ul class="process-list">
                                <li>Selecting the priority-wise ranking Social Criteria</li>
                                <li> PerformingPairwise Comparison of Selected Soical Criteria</li>
                                 <li>To Check Consistency Ratio </li>
                                 <li>Selecting the priority-wise ranking Economic Criteria</li>
                                <li>Performing Pairwise Comparison of Selected Economic Criteria</li>
                                 <li>To Check Consistency Ratio </li>
                                 <li>Selecting the priority-wise ranking Environmental Criteria</li>
                                <li> Performing Pairwise Comparison of Selected Environmental Criteria</li>
                                <li>To Check Consistency Ratio </li>
                                <li>Scoring of Construction Methods Based on Criterias</li>
                             
                            </ul>
                            </div>
                            <div className="hero-container">
                            <div className="glass-card">
                                <h3 className="proj-heading">Project Title:</h3>
                                <h1 className="project-title">
                                A Comparative Study on the Sustainability of{" "}
                                <span className="project-highlight">3D Printing</span> and Various
                                Construction Methods
                                </h1>

                                <p className="subtitle">
                                Evaluating modern and conventional construction techniques using
                                sustainability criteria
                                </p>
                            </div>
                            </div>
                            <div className="team-container">
                            <h1 className="team-title">Project Team</h1>

                            <div className="team-cards">
                                <div className="card">
                                <h3>Name: S.Gopi</h3>
                                <p>Roll No: H2560122</p>
                                </div>

                                <div className="card">
                                <h3>Name: S.Shahanaz</h3>
                                <p>Roll No: H2560124</p>
                                </div>

                                <div className="card">
                                <h3>Name: S.Tarun</h3>
                                <p>Roll No: H2560128</p>
                                </div>
                            </div>

                            <h1 className="guide-title">Project Guide</h1>
                            <div className="guide-card">
                                <h3>Guide Details</h3>
                                <p> <strong>Name:</strong> Dr.Venkatesan Ranganaidu,IIT Bombay </p>
                                <p><strong>Designation:</strong> Professor, Dean of IQAC at NUCS hyderabad </p>
                                <p><strong>Department:</strong> School of Construction Management,Nicmar Hyderbad  </p>
                            </div>
                            </div>
                        </div>
                        
                        <h3 className="section">Section 1</h3>
                        <h1 className="personal-inf"> Personal Information</h1>
                        <div className="lg-separator">
                        <label className="lg-label-text" htmlFor="username">FULL NAME</label>
                        <input className={`lg-input-element ${userBorder}`} type="text" id="username" value={username} onChange={this.onChangeUsername} placeholder="e.g., Gopi"/>
                        {isUserErr && <p className="error-text">{isUserErrMsg}</p>}
                        </div>
                        <div className="lg-separator">
                        <label className="lg-label-text" htmlFor="designation">CURRENT DESIGNATION / JOB TITLE</label>
                        <input className={`lg-input-element ${designationBorder}`} type="text" id="designation" value={designation} onChange={this.onChangeDesignation} placeholder="e.g., Civil Engineer"/>
                        {isDesignationErr && <p className="error-text">{isDesignationErrMsg}</p>}
                        </div>
                        <div className="lg-separator">
                        <label className="lg-label-text" htmlFor="institution">ORGANIZATION / INSTITUTION</label>
                        <input className={`lg-input-element ${institutionBorder}`} type="text" id="institution" value={institution} onChange={this.onChangeInstitution} placeholder="e.g., NICMAR University"/>
                        {isInstitutionErr && <p className="error-text">{isInstitutionErrMsg}</p>}
                        </div>
                        <div className="lg-separator">
                        <label className="lg-label-text" htmlFor="areaOfExpertise">AREA OF EXPERTISE</label>
                        <input className={`lg-input-element ${areaOfExpertiseBorder}`} type="text" id="areaOfExpertise" value={areaOfExpertise} onChange={this.onChangeAreaOfExpertise} placeholder="e.g., Structural Engineering"/>
                        {isAreaOfExpertiseErr && <p className="error-text">{isAreaOfExpertiseErrMsg}</p>}
                        </div>
                        <div className="lg-separator">
                        <label className="lg-label-text" htmlFor="experience">YEARS OF PROFESSIONAL EXPERIENCE</label>
                        <input className={`lg-input-element ${experienceBorder}`} type="text" id="experience" value={experience} onChange={this.onChangeExperience} placeholder="e.g., 10"/>
                        {isExperienceErr && <p className="error-text">{isExperienceErrMsg}</p>}
                        </div>
                        <div className="lg-separator">
                        <label className="lg-label-text" htmlFor="qualifications">HIGHEST ACADEMIC QUALIFICATION</label>
                        <input className={`lg-input-element ${qualificationsBorder}`} type="text" id="qualifications" value={qualifications} onChange={this.onChangeQualifications} placeholder="e.g., Master's Degree"/>
                        {isQualificationsErr && <p className="error-text">{isQualificationsErrMsg}</p>}
                        </div>
                        
                        <div>
                            <h3 className="section">Section 2</h3>
                            <h1 className="personal-inf">Pairwise Comparison</h1>
                            <p className="text">This section generates the AHP Pairwise Comparison Matrices required to compute criteria weights. It is the most mathematically critical section of the survey. The data from pairwise questions ( Social ,  Economic , Environmental) is used to build reciprocal matrices, compute eigenvectors (priority weights), and verify logical consistency through the Consistency Ratio (CR less than 0.10).

                            </p>
                            
                                <div className="table-container">
                                <h3 className="table-title">AHP SCALE REFERENCE </h3>
                                <table className="ahp-table">
                                    <thead>
                                    <tr>
                                        <th>Intensity of Importance</th>
                                        <th>Definition</th>
                                        <th>Explanation</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Equal Importance</td>
                                        <td>Two factors contribute equally to the objective</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Somewhat more important</td>
                                        <td>
                                        Experience and judgment slightly favour one factor over the other
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>5</td>
                                        <td>Much more important</td>
                                        <td>
                                        Experience and judgment strongly favor one factor over the other
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>7</td>
                                        <td>Very much more important</td>
                                        <td>
                                        A factor is favoured very strongly over the other. Evidence exists
                                        for its dominance
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>9</td>
                                        <td>Extremely more important</td>
                                        <td>
                                        The evidence favoring one factor over the other is of the highest
                                        possible validity
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2, 4, 6, 8</td>
                                        <td>Intermediate Importance</td>
                                        <td>For compromise between the above values</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>

                            <div>
                                <h1 className="personal-inf" >Social Criteria</h1> 
                                 <div className="container">
                                        <h2 className="ranking-title">Selecting Social Criteria Ranking</h2>
                                        <p>Selecting Social Criteria Ranking Based on Priority. Rank 1 - Highest Priority | Rank 2 - Very High Priority | Rank 3 - Medium Priority | Rank 4 - Low Priority | Rank 5 - Least Priority</p>

                                        <div className="table-wrapper">
                                        <table className="ranking-table">
                                            <thead className="ranking-thead">
                                            <tr className="ranking-tr">
                                                <th className="raking-th sticky-col">Criteria</th>
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                <th className="raking-th" key={num}>Rank {num}</th>
                                                ))}
                                            </tr>
                                            </thead>

                                            <tbody className="rankingtbody">
                                            {criteria.map((criterion) => (
                                                <tr key={criterion}>
                                                <td className=" ranking-td sticky-col">{criterion}</td>

                                                {[1, 2, 3, 4, 5].map((num) => {
                                                    const isChecked = selectedValues[criterion] === num;

                                                    return (
                                                    <td className="ranking-td" key={num}>
                                                        <input
                                                        type="radio"
                                                        checked={isChecked}
                                                        onClick={() =>
                                                            this.handleClick(criterion, num)
                                                        }
                                                        readOnly
                                                        />
                                                    </td>
                                                    );
                                                })}
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        </div>

                                        {error && <div className="error">{error}</div>}
                                    </div>
                                <div>
                                    <div className="cr-container">
                                    <h2 className="cr-title">⚙️ Consistency Check</h2>

                                    <p className="cr-note">
                                        After entering all values, click on the <span>Generate</span> button.
                                    </p>

                                    <div className="cr-rules">
                                        <p className="cr-valid">
                                        ✔ If Consistency Ratio (CR) &lt; 0.10 (10%), you can proceed to submit.
                                        </p>
                                        <p className="cr-invalid">
                                        ❌ If CR ≥ 0.10, please revise your inputs to improve consistency.
                                        </p>
                                    </div>
                                    </div>
                                    <span className="yellow-box"></span>
                                    <p className="yellow-box-text">Yellow Color place only enter values 1-9</p>
                                </div>
                                <div>
                                  <div className="construction-methods-main-container">
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text"> Social Criteria  </h1>
                                        </div>
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedObject)[0]}</h1>
                                        </div>  
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedObject)[1]}</h1>
                                        </div>  
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedObject)[2]}</h1>
                                        </div>  
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedObject)[3]}</h1>
                                        </div>  
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedObject)[4]}</h1>
                                        </div>    
                                                
                                    </div>

                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky" >
                                            <h1 className="title-text">{Object.keys(sortedObject)[0]}</h1>
                                        </div>
                                        <div className="title-container">
                                            <input type="text" className="title-input" value={WSvsWS} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isWSvsCD ? 'highlight' : ''}`} value={WSvsCD} onChange={this.onEnterWSvsCDRating} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isWSvsJC ? 'highlight' : ''}`} value={WSvsJC} onChange={this.onEnterWSvsJCRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isWSvsSD ? 'highlight' : ''}`} value={WSvsSD} onChange={this.onEnterWSvsSDRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isWSvsPA ? 'highlight' : ''}`} value={WSvsPA} onChange={this.onEnterWSvsPARating} />
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                             <h1 className="title-text">{Object.keys(sortedObject)[1]}</h1>
                                        </div>
                                       
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={CDvsWS}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={CDvsCD}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCDvsSD ? 'highlight' : ''}`} value={CDvsSD} onChange={this.onEnterCDvsSDRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCDvsJC ? 'highlight' : ''}`} value={CDvsJC} onChange={this.onEnterCDvsJCRating} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCDvsPA ? 'highlight' : ''}`} value={CDvsPA} onChange={this.onEnterCDvsPARating} />
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedObject)[2]}</h1>
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={JCvsWS} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={JCvsCD}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={JCvsJC} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isJCvsSD ? 'highlight' : ''}`} value={JCvsSD} onChange={this.onEnterJCvsSDRating} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isJCvsPA ? 'highlight' : ''}`} value={JCvsPA} onChange={this.onEnterJCvsPARating} />
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedObject)[3]}</h1>
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={SDvsWS}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={SDvsCD}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={SDvsJC}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={SDvsSD}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isSDvsPA ? 'highlight' : ''}`} value={SDvsPA} onChange={this.onEnterSDvsPARating} />
                                        </div>
                                        
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedObject)[4]}</h1>
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={PAvsWS} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={PAvsCD} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={PAvsJC} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={PAvsSD} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={PAvsPA}  />    
                                        </div>
                                    </div>
                                  </div> 
                                     
                                    <button className="generate-button" type="button" onClick={this.onSocialConsistencyRatioCheck} >
                                    Generate 
                                    </button>
                                    {isGenerate && <p className="success-text">{CR<0.1?`The matrix is consistent: ${CR}= ${CR*100}% ,CR < 0.1 or 10%`:`${CR}=${CR*100}% The matrix is not consistent :Revise the ratings,CR < 0.1 or 10%`}</p>}
                                </div>
                            </div>
                            <div>
                                <h1 >Economic Criteria</h1>
                                 <div className="container">
                                        <h2 className="ranking-title">Selecting Economic Criteria Ranking</h2>
                                        <p>Selecting Economic Criteria Ranking Based on Priority. Rank 1 - Highest Priority | Rank 2 - Very High Priority | Rank 3 - Medium Priority | Rank 4 - Low Priority | Rank 5 - Least Priority</p>

                                        <div className="table-wrapper">
                                        <table className="ranking-table">
                                            <thead className="ranking-thead">
                                            <tr className="ranking-tr">
                                                <th className="raking-th sticky-col">Criteria</th>
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                <th className="raking-th" key={num}>Rank {num}</th>
                                                ))}
                                            </tr>
                                            </thead>

                                            <tbody className="rankingtbody">
                                            {criteriaE.map((criterion) => (
                                                <tr key={criterion}>
                                                <td className=" ranking-td sticky-col">{criterion}</td>

                                                {[1, 2, 3, 4, 5].map((num) => {
                                                    const isChecked = selectedValuesE[criterion] === num;

                                                    return (
                                                    <td className="ranking-td" key={num}>
                                                        <input
                                                        type="radio"
                                                        checked={isChecked}
                                                        onClick={() =>
                                                            this.handleClickE(criterion, num)
                                                        }
                                                        readOnly
                                                        />
                                                    </td>
                                                    );
                                                })}
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        </div>

                                        {errorE && <div className="error">{errorE}</div>}
                                    </div>
                                <div className="cr-container">
                                    <h2 className="cr-title">⚙️ Consistency Check</h2>

                                    <p className="cr-note">
                                        After entering all values, click on the <span>Generate</span> button.
                                    </p>

                                    <div className="cr-rules">
                                        <p className="cr-valid">
                                        ✔ If Consistency Ratio (CR) &lt; 0.10 (10%), you can proceed to submit.
                                        </p>
                                        <p className="cr-invalid">
                                        ❌ If CR ≥ 0.10, please revise your inputs to improve consistency.
                                        </p>
                                    </div>
                                    </div>
                                <div>
                                    <span className="green-box"></span>
                                    <p className="green-box-text">Green Color place only enter values 1-9</p>
                                </div>
                                <div>
                                  <div className="construction-methods-main-container">
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text"> Economic Criteria  </h1>
                                        </div>
                                        <div className="title-container"    >
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[0]}</h1>
                                        </div>
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[1]}</h1>
                                        </div>
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[2]}</h1>
                                        </div>
                                        <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[3]}</h1>
                                        </div>
                                        <div className="title-container ">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[4]}</h1>
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                        <h1 className="title-text">{Object.keys(sortedEconomicObject)[0]}</h1>
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={ICvsIC} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isICvsCS ? 'highlight-green' : ''}`} value={ICvsCS} onChange={this.onEnterICvsCSRating} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isICvsWC ? 'highlight-green' : ''}`} value={ICvsWC} onChange={this.onEnterICvsWCRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isICvsLCC ? 'highlight-green' : ''}`} value={ICvsLCC} onChange={this.onEnterICvsLCCRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isICvsMCC ? 'highlight-green' : ''}`} value={ICvsMCC} onChange={this.onEnterICvsMCCRating} />
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[1]}</h1>
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={CSvsIC}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={CSvsCS}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCSvsWC ? 'highlight-green' : ''}`} value={CSvsWC} onChange={this.onEnterCSvsWCRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCSvsLCC ? 'highlight-green' : ''}`} value={CSvsLCC} onChange={this.onEnterCSvsLCCRating} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCSvsMCC ? 'highlight-green' : ''}`} value={CSvsMCC} onChange={this.onEnterCSvsMCCRating} />
                                        </div>
                                       
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[2]}</h1>
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={WCvsIC} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={WCvsCS} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={WCvsWC} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isWCvsLCC ? 'highlight-green' : ''}`} value={WCvsLCC} onChange={this.onEnterWCvsLCCRating} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isWCvsMCC ? 'highlight-green' : ''}`} value={WCvsMCC} onChange={this.onEnterWCvsMCCRating} />
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[3]}</h1>
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LCCvsIC}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LCCvsCS}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LCCvsWC}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LCCvsLCC}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isLCCvsMCC ? 'highlight-green' : ''}`} value={LCCvsMCC} onChange={this.onEnterLCCvsMCCRating} />
                                        </div>
                                     </div>
                                        <div className="sub-criteria-title-container">
                                            <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedEconomicObject)[4]}</h1>
                                            </div>
                                            <div className="title-container">
                                            <input type="text" className="title-input" value={MCCvsIC} />
                                            </div>
                                            <div className="title-container">
                                            <input type="text" className="title-input" value={MCCvsCS} />
                                            </div>
                                            <div className="title-container">
                                            <input type="text" className="title-input" value={MCCvsWC} />
                                            </div>
                                            <div className="title-container">
                                            <input type="text" className="title-input" value={MCCvsLCC} />
                                            </div>
                                            <div className="title-container">
                                            <input type="text" className="title-input" value={MCCvsMCC} />
                                            </div>
                                        </div>
                                     
                                  </div>  
                                    
                                    <button className="generate-button" type="button" onClick={this.onEconomicConsistencyRatioCheck} >
                                    Generate 
                                    </button>
                                    {isGenerateEconomic && <p className="success-text">{CRC<0.1?`The matrix is consistent: ${CRC}= ${CRC*100}% ,CR < 0.1 or 10%`:`${CRC}=${CRC*100}% The matrix is not consistent :Revise the ratings,CR < 0.1 or 10%`}</p>}
                                   
                                </div>   
                            </div>
                             <div>
                                <h1 >Environmental Criteria</h1>
                                <div className="container">
                                        <h2 className="ranking-title">Selecting Environmental Criteria Ranking</h2>
                                        <p>Selecting Environmental Criteria Ranking Based on Priority. Rank 1 - Highest Priority | Rank 2 - Very High Priority | Rank 3 - Medium Priority | Rank 4 - Low Priority | Rank 5 - Least Priority</p>

                                        <div className="table-wrapper">
                                        <table className="ranking-table">
                                            <thead className="ranking-thead">
                                            <tr className="ranking-tr">
                                                <th className="raking-th sticky-col">Criteria</th>
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                <th className="raking-th" key={num}>Rank {num}</th>
                                                ))}
                                            </tr>
                                            </thead>

                                            <tbody className="rankingtbody">
                                            {criteriaEv.map((criterion) => (
                                                <tr key={criterion}>
                                                <td className=" ranking-td sticky-col">{criterion}</td>

                                                {[1, 2, 3, 4, 5].map((num) => {
                                                    const isChecked = selectedValuesEv[criterion] === num;

                                                    return (
                                                    <td className="ranking-td" key={num}>
                                                        <input
                                                        type="radio"
                                                        checked={isChecked}
                                                        onClick={() =>
                                                            this.handleClickEv(criterion, num)
                                                        }
                                                        readOnly
                                                        />
                                                    </td>
                                                    );
                                                })}
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        </div>

                                        {errorEv && <div className="error">{errorEv}</div>}
                                    </div>
                                <div className="cr-container">
                                    <h2 className="cr-title">⚙️ Consistency Check</h2>

                                    <p className="cr-note">
                                        After entering all values, click on the <span>Generate</span> button.
                                    </p>

                                    <div className="cr-rules">
                                        <p className="cr-valid">
                                        ✔ If Consistency Ratio (CR) &lt; 0.10 (10%), you can proceed to submit.
                                        </p>
                                        <p className="cr-invalid">
                                        ❌ If CR ≥ 0.10, please revise your inputs to improve consistency.
                                        </p>
                                    </div>
                                    </div>
                                <div>
                                    <span className="blue-box"></span>
                                    <p className="blue-box-text">Blue Color place only enter values 1-9</p>
                                </div>
                                <div>
                                  <div className="construction-methods-main-container">
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                             <h1 className="title-text">Environmental Criteria</h1>
                                        </div>
                                         <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[0]}</h1>
                                         </div>
                                         <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[1]}</h1>
                                         </div>
                                         <div className="title-container ">
                                            <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[2]}</h1>
                                         </div>
                                         <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[3]}</h1>
                                         </div>
                                         <div className="title-container">
                                            <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[4]}</h1>
                                         </div>
                                        
                                        
                                        
                                        
                                        
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                            <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[0]}</h1>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={CMvsCM} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCMvsCWG ? 'highlight-blue' : ''}`} value={CMvsCWG} onChange={this.onEnterCMvsCWGRating} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCMvsEC ? 'highlight-blue' : ''}`} value={CMvsEC} onChange={this.onEnterCMvsECRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCMvsWU ? 'highlight-blue' : ''}`} value={CMvsWU} onChange={this.onEnterCMvsWURating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCMvsLD ? 'highlight-blue' : ''}`} value={CMvsLD} onChange={this.onEnterCMvsLDRating} />
                                        </div>
                                        
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                        <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[1]}</h1>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={CWGvsCM}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={CWGvsCWG}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCWGvsEC ? 'highlight-blue' : ''}`} value={CWGvsEC} onChange={this.onEnterCWGvsECRating}  />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCWGvsWU ? 'highlight-blue' : ''}`} value={CWGvsWU} onChange={this.onEnterCWGvsWURating} />
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isCWGvsLD ? 'highlight-blue' : ''}`} value={CWGvsLD} onChange={this.onEnterCWGvsLDRating} />
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                        <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[2]}</h1>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={ECvsCM} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={ECvsCWG} />
                                        </div>
                                       
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={ECvsEC} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isECvsWU ? 'highlight-blue' : ''}`} value={ECvsWU} onChange={this.onEnterECvsWURating} />
                                        </div>
                                       
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isECvsLD ? 'highlight-blue' : ''}`} value={ECvsLD} onChange={this.onEnterECvsLDRating} />
                                        </div>
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                        <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[3]}</h1>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={WUvsCM}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={WUvsCWG}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={WUvsEC}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={WUvsWU}/>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className={`title-input ${isWUvsLD ? 'highlight-blue' : ''}`} value={WUvsLD} onChange={this.onEnterWUvsLDRating} />
                                        </div>
                                    
                                    </div>
                                    <div className="sub-criteria-title-container">
                                        <div className="title-container sticky">
                                        <h1 className="title-text">{Object.keys(sortedEnvironmentalObject)[4]}</h1>
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LDvsCM} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LDvsCWG} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LDvsEC} />
                                        </div>
                                        
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LDvsWU} />
                                        </div>
                                        <div className="title-container">
                                           <input type="text" className="title-input" value={LDvsLD} />
                                        </div>
                                        
                                    </div>
                                  </div>  
                                  
                                    <button className="generate-button" type="button" onClick={this.onEnvironmentalConsistencyRatioCheck} >
                                    Generate 
                                    </button>
                                    {isGenerateEnvironmental && <p className="success-text">{CRE<0.1?`The matrix is consistent: ${CRE}= ${CRE*100}% ,CR < 0.1 or 10%`:`${CRE}=${CRE*100}% The matrix is not consistent :Revise the ratings,CR < 0.1 or 10%`}</p>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="section">Section 3</h3>
                            <h1 className="personal-inf">AHP-Based Performance Rating for Construction Methods</h1>
                            <p className="text">Rating Scale (1–5 Score): For each of the 15 sub-criteria, rate the performance of each construction method on a scale of 1 to 5, where
                                1 = Very Poor  |  2 = Poor  |  3 = Moderate  |  4 = Good  |  5 = Very Good
                                For cost/impact criteria, higher score means BETTER performance (lower cost, lower impact)
                            </p>
                             <div className="construction-methods-main-container">
                               <div className="sub-criteria-title-container">
                                    <div className="title-container sticky">
                                       <h1 className="title-text">Construction Methods</h1> 
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Worker safety and health</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Community disruption</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Job creation</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Skill development</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Public acceptance</h1>
                                    </div>
                                    <div className="title-container">
                                         <h1 className="title-text">Initial / capital cost</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Construction speed</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Labour / workforce cost</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Maintenance & life-cycle cost</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Material wastage cost</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Carbon emissions / CO2 footprint</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Construction waste generation</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Energy consumption</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Water usage</h1>
                                    </div>
                                    <div className="title-container">
                                        <h1 className="title-text">Land disturbance</h1>
                                    </div>
                                    
                                </div>
                                <div className="sub-criteria-title-container">
                                    <div className="title-container sticky">
                                       <h1 className="title-input">Conventional</h1> 
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsWS} onChange={this.onMethodAndCriteriaCVvsWS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsCD} onChange={this.onMethodAndCriteriaCVvsCD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsJC} onChange={this.onMethodAndCriteriaCVvsJC} />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsSD} onChange={this.onMethodAndCriteriaCVvsSD} />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsPA} onChange={this.onMethodAndCriteriaCVvsPA}  />
                                    </div>
                                    <div className="title-container">
                                         <input className="title-input" type="text" value={CVvsIC} onChange={this.onMethodAndCriteriaCVvsIC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsCS} onChange={this.onMethodAndCriteriaCVvsCS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsWC} onChange={this.onMethodAndCriteriaCVvsWC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsLCC} onChange={this.onMethodAndCriteriaCVvsLCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsMCC} onChange={this.onMethodAndCriteriaCVvsMCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsCM} onChange={this.onMethodAndCriteriaCVvsCM}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsCWG} onChange={this.onMethodAndCriteriaCVvsCWG}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsEC} onChange={this.onMethodAndCriteriaCVvsEC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsWU} onChange={this.onMethodAndCriteriaCVvsWU}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={CVvsLD} onChange={this.onMethodAndCriteriaCVvsLD}  />
                                    </div>
                                    
                                </div>
                                 <div className="sub-criteria-title-container">
                                    <div className="title-container sticky">
                                       <h1 className="title-input">Precast</h1> 
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsWS} onChange={this.onMethodAndCriteriaPCvsWS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsCD} onChange={this.onMethodAndCriteriaPCvsCD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsJC} onChange={this.onMethodAndCriteriaPCvsJC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsSD} onChange={this.onMethodAndCriteriaPCvsSD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsPA} onChange={this.onMethodAndCriteriaPCvsPA}  />
                                    </div>
                                    <div className="title-container">
                                         <input className="title-input" type="text" value={PCvsIC} onChange={this.onMethodAndCriteriaPCvsIC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsCS} onChange={this.onMethodAndCriteriaPCvsCS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsWC} onChange={this.onMethodAndCriteriaPCvsWC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsLCC} onChange={this.onMethodAndCriteriaPCvsLCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsMCC} onChange={this.onMethodAndCriteriaPCvsMCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsCM} onChange={this.onMethodAndCriteriaPCvsCM}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsCWG} onChange={this.onMethodAndCriteriaPCvsCWG}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsEC} onChange={this.onMethodAndCriteriaPCvsEC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsWU} onChange={this.onMethodAndCriteriaPCvsWU}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PCvsLD} onChange={this.onMethodAndCriteriaPCvsLD}  />
                                    </div>
                                    
                                </div>
                                 <div className="sub-criteria-title-container">
                                    <div className="title-container sticky">
                                       <h1 className="title-input">Prefabrication</h1> 
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsWS} onChange={this.onMethodAndCriteriaPFvsWS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsCD} onChange={this.onMethodAndCriteriaPFvsCD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsJC} onChange={this.onMethodAndCriteriaPFvsJC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsSD} onChange={this.onMethodAndCriteriaPFvsSD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsPA} onChange={this.onMethodAndCriteriaPFvsPA}  />
                                    </div>
                                    <div className="title-container">
                                         <input className="title-input" type="text" value={PFvsIC} onChange={this.onMethodAndCriteriaPFvsIC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsCS} onChange={this.onMethodAndCriteriaPFvsCS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsWC} onChange={this.onMethodAndCriteriaPFvsWC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsLCC} onChange={this.onMethodAndCriteriaPFvsLCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsMCC} onChange={this.onMethodAndCriteriaPFvsMCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsCM} onChange={this.onMethodAndCriteriaPFvsCM}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsCWG} onChange={this.onMethodAndCriteriaPFvsCWG}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsEC} onChange={this.onMethodAndCriteriaPFvsEC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsWU} onChange={this.onMethodAndCriteriaPFvsWU}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={PFvsLD} onChange={this.onMethodAndCriteriaPFvsLD}  />
                                    </div>
                                    
                                </div>
                                 <div className="sub-criteria-title-container">
                                    <div className="title-container sticky">
                                       <h1 className="title-input">Modular</h1> 
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsWS} onChange={this.onMethodAndCriteriaMvsWS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsCD} onChange={this.onMethodAndCriteriaMvsCD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsJC} onChange={this.onMethodAndCriteriaMvsJC}     />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsSD} onChange={this.onMethodAndCriteriaMvsSD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsPA} onChange={this.onMethodAndCriteriaMvsPA}  />
                                    </div>
                                    <div className="title-container">
                                         <input className="title-input" type="text" value={MvsIC} onChange={this.onMethodAndCriteriaMvsIC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsCS} onChange={this.onMethodAndCriteriaMvsCS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsWC} onChange={this.onMethodAndCriteriaMvsWC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsLCC} onChange={this.onMethodAndCriteriaMvsLCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsMCC} onChange={this.onMethodAndCriteriaMvsMCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsCM} onChange={this.onMethodAndCriteriaMvsCM}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsCWG} onChange={this.onMethodAndCriteriaMvsCWG}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsEC} onChange={this.onMethodAndCriteriaMvsEC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsWU} onChange={this.onMethodAndCriteriaMvsWU}     />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={MvsLD} onChange={this.onMethodAndCriteriaMvsLD}     />
                                    </div>
                                    
                                </div>
                                 <div className="sub-criteria-title-container">
                                    <div className="title-container sticky">
                                       <h1 className="title-input">3D Printing</h1> 
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsWS} onChange={this.onMethodAndCriteriaAMvsWS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsCD} onChange={this.onMethodAndCriteriaAMvsCD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsJC} onChange={this.onMethodAndCriteriaAMvsJC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsSD} onChange={this.onMethodAndCriteriaAMvsSD}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsPA} onChange={this.onMethodAndCriteriaAMvsPA}  />
                                    </div>
                                    <div className="title-container">
                                         <input className="title-input" type="text" value={AMvsIC} onChange={this.onMethodAndCriteriaAMvsIC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsCS} onChange={this.onMethodAndCriteriaAMvsCS}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsWC} onChange={this.onMethodAndCriteriaAMvsWC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsLCC} onChange={this.onMethodAndCriteriaAMvsLCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsMCC} onChange={this.onMethodAndCriteriaAMvsMCC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsCM} onChange={this.onMethodAndCriteriaAMvsCM}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsCWG} onChange={this.onMethodAndCriteriaAMvsCWG}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsEC} onChange={this.onMethodAndCriteriaAMvsEC}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsWU} onChange={this.onMethodAndCriteriaAMvsWU}  />
                                    </div>
                                    <div className="title-container">
                                        <input className="title-input" type="text" value={AMvsLD} onChange={this.onMethodAndCriteriaAMvsLD}  />
                                    </div>
                                </div>
                                  
                            </div>

                        </div>
                
                        <button className="submit-btn" type="submit">
                            Submit
                        </button>
                        {isErr && <p className="error-text">{isErrorMsg}</p>} 
                   
                    </form>
                </div>
                : this.SuccessfulSurveyContainer()
    }
               
            
            </>
        )
    }
}

export default MCDAProject