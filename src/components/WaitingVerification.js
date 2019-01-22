import React, { Component } from 'react';

class WaitingVerification extends Component {
   render() {
       return (
           <div>
               <h2>Harap Diperhatikan</h2>
               <p>Silahkan Cek Email Anda Untuk proses verifikasi akun.</p>
               <p>Bila Anda tidak mendapatkan email dari sang raja, harap cemas dan klik button dibawah ini untuk Resend</p>
               <input type="button" value="Resend Email"/>
           </div>
       )
   }
}

export default WaitingVerification;