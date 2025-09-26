import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW55fGVufDB8fDB8fHww";
    return (
        <div className="InfoBox">
          <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                info.humidity > 80 ? <ThunderstormIcon/>  : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temprature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>MinTemp = {info.tempMin}&deg;C</p>
                <p>MaxTemp = {info.tempMax}&deg;C</p>
                <p>The weather can be describe as <b>{info.weather}</b> and feels Like = {info.feelsLike}&deg;C</p>
              </Typography>
            </CardContent>
          </Card>
          </div>
        </div>
    );
}