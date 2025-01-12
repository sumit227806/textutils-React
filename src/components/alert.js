 function Alert(props){

    const captalize=(word)=>{
      const lower=word.toLowerCase();
       return lower.charAt(0).toUpperCase() +lower.slice(1);
       
    }
        return(
   props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible`}>
  <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  <strong>{captalize(props.Alert.type)}:</strong> {props.Alert.msg}
</div>
    );
}
export default Alert; 