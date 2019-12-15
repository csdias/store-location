function mapChooser(fileIdentifier){

    // if (!fileIdentifier){
    //     fileIdentifier = 'default';
    // }

    fileIdentifier = !fileIdentifier === true? 'none': fileIdentifier;

    return `${fileIdentifier}.png`;

}

export default mapChooser;