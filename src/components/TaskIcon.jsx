/* eslint-disable react/prop-types */
import PetsIcon from '@mui/icons-material/Pets';
import YardIcon from '@mui/icons-material/Yard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MedicationIcon from '@mui/icons-material/Medication';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SchoolIcon from '@mui/icons-material/School';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HeadphonesBatteryIcon from '@mui/icons-material/HeadphonesBattery';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';


function TaskIcon ({icon}) {

  return (
    <>  
    {icon === 'PetsIcon' && <PetsIcon fontSize='large'/>}
    {icon === 'YardIcon' && <YardIcon  fontSize='large'/>}
    {icon === 'FitnessCenterIcon' && <FitnessCenterIcon fontSize='large'/>}
    {icon === 'AutoStoriesIcon' && <AutoStoriesIcon fontSize='large'/>}
    {icon === 'MedicationIcon' && <MedicationIcon fontSize='large'/>}
    {icon === 'FreeBreakfastIcon' && <FreeBreakfastIcon fontSize='large'/>}
    {icon === 'SelfImprovementIcon' && <SelfImprovementIcon fontSize='large'/>}
    {icon === 'LocalAtmIcon' && <LocalAtmIcon fontSize='large' />}
    {icon === 'SchoolIcon' && <SchoolIcon fontSize='large' />}
    {icon === 'EventRepeatIcon' && <EventRepeatIcon fontSize='large'/>}
    {icon === 'LocalPhoneIcon' && <LocalPhoneIcon fontSize='large'/>}
    {icon === 'HeadphonesBatteryIcon' && <HeadphonesBatteryIcon fontSize='large'/>}
    {icon === 'EditNoteIcon' && <EditNoteIcon fontSize='large'/>}
    {icon === 'ChecklistIcon' && <ChecklistIcon fontSize='large'/>}
    {icon === 'LocalDrinkIcon' && <LocalDrinkIcon fontSize='large'/>}
  
    </>

  )

}

export default TaskIcon