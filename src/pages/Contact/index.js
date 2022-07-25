import React from "react";
import {Grid, Typography } from "@mui/material";

function Contact() {
    return (
        <Grid container spacing={2}  sx={{my:3}}>
            <Grid item xs={4}>
                <img src={`./images/1.jpg`} style={{
                    width: "100%",
                    maxHeight: "100%"
                }} />
            </Grid>
            <Grid item xs={8}>
                <Typography align="center" variant="h4">פלוני אלמוני</Typography>
                <Typography align="center" variant="body1">
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                    <br />
                    הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
                    <br />
                    ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.

                </Typography>
            </Grid>
        </Grid>
    )
}
export default Contact;