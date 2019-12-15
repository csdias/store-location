function mapChooser(fileIdentifier){

    // if (!fileIdentifier){
    //     fileIdentifier = 'default';
    // }

    fileIdentifier = !fileIdentifier == true? 'default': fileIdentifier;

    return `${fileIdentifier}.jpg`;

}

export default mapChooser;