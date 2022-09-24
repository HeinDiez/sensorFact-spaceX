import React from 'react';
import * as MUI from '@mui/material';
import { LaunchList, Launch } from './launches.interface';

function LaunchesGrid({ launches }: LaunchList) {
    return ( 
        <MUI.Grid container spacing={2}>
            {   launches.map((launch: Launch)=><MUI.Grid key={launch.id} item xs={12} md={6} lg={4}>
                    <div>
                        <MUI.Card sx={{ maxWidth: 345 }}>
                            <MUI.CardMedia
                                component="img"
                                height="140"
                                image={launch.links.flickr_images[0]}
                                alt={launch.mission_name}
                            />
                            <MUI.CardContent>
                                <MUI.Typography gutterBottom variant="h5" component="div">
                                    {launch.mission_name}
                                </MUI.Typography>
                                <MUI.Typography variant="body2" color="text.secondary">
                                    {launch.details}
                                </MUI.Typography>
                            </MUI.CardContent>
                            <MUI.CardActions>
                                <MUI.Button size="small">Learn More</MUI.Button>
                            </MUI.CardActions>
                        </MUI.Card>
                    </div>
                </MUI.Grid>
            )}
        </MUI.Grid>
    );
}

export default LaunchesGrid;
