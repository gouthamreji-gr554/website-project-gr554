$(function(){
    var spreadsheetId = '1A_7XC1v-dBgWbQTLiYZkLS1FqCihCio0arqjyTUdJ8k';
    var range = 'Sheet1!1:2';
    $('#sheet-button').click(function() {
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range
        }).then((response) => {
            var result = response.result;
            var numRows = result.values ? result.values.length : 0;
            console.log(`${numRows} rows retrieved.`);
        });
    });
});
