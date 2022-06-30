import React from "react";
import {useNavigate} from "react-router-dom";

export default function About() {
  // To use navigate after doing some operations the  must use "useNavigate() Hook"
  const navigate = useNavigate();

  const f1 = () =>{

    // Do Somthing (Operation) before Jump to Home page
    alert("Operation Done...");

    // After Done Operation then jump to Home page
    navigate("/home");
     
  };

  // In above Here we are navigating one route to another router before doing some operations programmatically
  return (
    <>
      <div className="text-center text-success h3 mt-3">
        This is About Page...
      </div>
      <div>
      <button className="btn btn-success ms-2 mb-3" onClick={f1}>CLick To Go Home Page</button>
      </div>
      {/* Here after click the button a alert message will show then navigate to the Home Page*/}

      <button className="btn btn-danger mx-3" onClick={()=> navigate(-1)}>Previous</button>
      <button className="btn btn-primary" onClick={()=> navigate(1)}>Next</button>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dapibus libero. Praesent mauris lectus, rutrum sit amet pharetra ac, venenatis sed quam. Donec nec ante ac odio convallis aliquet. Fusce tempus dolor pellentesque orci commodo, quis sodales ante suscipit. Etiam aliquam urna vel nibh ullamcorper, id laoreet enim dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet molestie dui. Vestibulum vitae facilisis leo. Nullam in accumsan nisl. Quisque ac turpis tincidunt, faucibus quam vitae, vehicula metus. Duis vel velit iaculis mi faucibus tempor et vel quam. Sed volutpat cursus efficitur. Fusce quis est orci. Mauris auctor arcu id sapien placerat, in consectetur velit facilisis. Nulla augue nisl, laoreet vel hendrerit varius, bibendum eget lorem.

Proin dapibus, turpis a consequat molestie, metus dui rhoncus dui, id fringilla turpis sapien convallis sapien. Donec a placerat augue. Morbi eros dolor, lacinia quis metus nec, porttitor faucibus sapien. Vestibulum nec risus rhoncus, efficitur leo at, porttitor erat. Aenean arcu sem, rutrum a eleifend sed, vehicula eget dui. Etiam rhoncus enim mauris, elementum vestibulum ante blandit vel. Nam ornare est sit amet turpis ultricies posuere. Proin egestas purus ut eros aliquam, et cursus lorem tempus. Curabitur sed tristique nulla.

Integer suscipit condimentum odio a feugiat. Quisque id pretium nulla, sit amet pellentesque ante. Aliquam erat volutpat. Duis nec nisl elementum, varius mauris quis, dapibus velit. Nunc nisl elit, interdum ac accumsan ac, suscipit at quam. Vivamus accumsan commodo tincidunt. Maecenas convallis eros a turpis consectetur mattis. In a suscipit nunc. Aenean eu mauris libero. Maecenas fringilla, metus nec scelerisque pellentesque, turpis velit efficitur ex, sit amet ultricies nisl mi ut augue. Curabitur eu elit viverra, lobortis dui sed, dapibus mauris. Ut iaculis ornare nulla sit amet euismod. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nullam ut finibus nisi. Duis fringilla porta orci vel euismod. Integer id elit vitae leo dictum consequat. Cras eu velit ut augue tincidunt facilisis non at tellus. Maecenas id nibh felis. Integer gravida justo non orci ornare elementum. Praesent convallis orci eu aliquet tristique. Suspendisse volutpat volutpat massa, non scelerisque lectus finibus eget. Integer eu diam ac lorem tincidunt sagittis blandit eu nibh. Fusce viverra lectus vehicula, viverra metus et, suscipit odio. Nulla ut enim purus. Quisque gravida lacus hendrerit risus tempor elementum.

Sed faucibus at nulla eget auctor. Maecenas id sapien ac nunc feugiat aliquam ut ac lacus. Maecenas justo urna, rhoncus quis vestibulum ut, consectetur eget urna. In imperdiet orci ex, eget laoreet diam finibus ac. Praesent pretium maximus ornare. Donec euismod massa in ligula commodo cursus. Vestibulum lobortis elit id ex vestibulum, porttitor dictum purus faucibus. Nulla laoreet rutrum egestas.

Ut sed enim risus. Mauris rutrum vestibulum velit et vulputate. Aliquam volutpat rhoncus sapien, sit amet congue enim varius eget. Aliquam eleifend ex nibh, sed auctor diam tristique nec. Donec nec orci id ex venenatis euismod. Nullam pharetra elementum felis a sagittis. Donec at turpis nisl. Aliquam orci nulla, cursus et orci fringilla, dictum ornare enim. Pellentesque convallis commodo tellus ac condimentum. Mauris rhoncus, urna vitae elementum laoreet, ligula neque egestas turpis, consectetur euismod nibh ipsum ac sem. Pellentesque vel rutrum nisi. Nullam vel auctor ex, vehicula malesuada mauris. Aenean congue convallis iaculis.

Praesent eget ornare orci, eget eleifend lacus. Phasellus sodales arcu sapien, quis bibendum lacus eleifend id. Morbi vestibulum sagittis felis, sodales malesuada arcu vehicula quis. Praesent tempor quis elit non tempus. Pellentesque quis pretium justo. Praesent at lacus nunc. Curabitur tincidunt finibus porta. Proin aliquam nunc non efficitur sagittis. Curabitur risus massa, commodo vel mollis ut, luctus a sapien. Integer eget nibh elementum, auctor dolor ut, dictum eros. Donec vitae sodales mi. Donec varius lorem eget eros hendrerit pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Suspendisse vitae felis a risus maximus dignissim sed vel ipsum. Vestibulum ut dictum massa. Morbi nec orci egestas, dapibus sem ac, eleifend urna. Pellentesque pretium congue libero. Morbi tristique id ipsum vel luctus. Nam a pretium libero, nec pulvinar odio. Sed auctor, nulla nec feugiat egestas, mi lorem volutpat turpis, at sodales elit ex quis sem. Pellentesque eleifend a lectus ut maximus. Mauris ante turpis, molestie quis feugiat non, sagittis eu elit. Suspendisse vitae ipsum nec risus vehicula maximus. Ut varius quam imperdiet, tempus massa eget, porta justo. Aliquam purus dui, tempus non faucibus at, ullamcorper id massa. Pellentesque ullamcorper condimentum nisi, sed ultrices ligula.

Phasellus tempor odio eget neque pellentesque, non venenatis felis consectetur. Duis tempor felis at rutrum scelerisque. Cras at pellentesque ex. Nam ex nisl, euismod a nibh quis, maximus consequat purus. Aliquam finibus odio sed quam molestie pulvinar a ac arcu. Suspendisse sit amet quam eu libero vulputate elementum. Aenean velit urna, malesuada sed ipsum hendrerit, ullamcorper mattis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam at urna rutrum, aliquet ex in, semper diam. Donec aliquet imperdiet nulla, id cursus lorem accumsan ut. Duis quis posuere erat. Nulla at ligula sit amet velit ultrices gravida. Quisque leo lectus, fermentum vel erat vel, accumsan interdum sem.

Pellentesque euismod, libero eget tincidunt lobortis, risus ante mattis nisi, eget vehicula massa orci id urna. Nam a neque tincidunt, rhoncus quam quis, facilisis neque. Pellentesque iaculis, nunc vitae semper mattis, sem ante bibendum lacus, et faucibus dolor libero quis ipsum. Nunc nec dapibus sem. Nulla bibendum faucibus ex, ac fermentum est. In malesuada elit sem. Nullam id vehicula mauris, vel eleifend ex. Nullam mattis, dui sit amet congue facilisis, purus tellus semper quam, sed ultricies quam augue a erat. Proin eu arcu in arcu porta finibus sed in dui. Maecenas et semper magna. In condimentum nibh et elit mollis, sit amet sodales elit facilisis.

Curabitur sit amet leo sit amet justo facilisis pharetra eget quis elit. Etiam rutrum et odio et feugiat. Fusce vitae felis ac massa laoreet iaculis. Ut iaculis, arcu efficitur tempor venenatis, orci nisl sagittis lacus, gravida porta risus nisl a risus. Quisque mattis magna non leo bibendum ornare. Phasellus nec ante a metus pharetra fringilla eu ac nulla. Nullam pretium aliquet sapien, ut tincidunt justo feugiat in. Mauris lobortis et nibh in vehicula. Nulla eget augue vel tortor varius pharetra. Cras placerat elit sed metus ullamcorper tincidunt. Phasellus ipsum elit, pulvinar in eleifend a, viverra vulputate sapien. Suspendisse vitae tristique ipsum. Nullam egestas sodales nunc sed elementum. Nunc at enim nec erat blandit sodales. Suspendisse non sapien ullamcorper, tincidunt mauris eu, euismod ligula. Vivamus ultrices iaculis dolor, quis suscipit mauris fringilla vitae.

Fusce condimentum justo a lorem iaculis, ac semper nisl interdum. Nam lacinia diam libero, a rhoncus mauris cursus a. Praesent vitae quam volutpat, malesuada lacus sit amet, rhoncus dolor. Nam porta, tellus at dictum sagittis, risus enim vehicula justo, nec ullamcorper dolor neque at est. Aliquam cursus nunc a odio tincidunt maximus. Nam magna metus, placerat luctus rutrum vel, pellentesque sit amet leo. Nunc pharetra, magna ac facilisis convallis, odio augue pulvinar massa, ac congue turpis ligula nec augue. Integer magna nisi, pellentesque quis metus pharetra, pellentesque vulputate nunc. Fusce placerat lectus non urna pretium tempus. Ut purus nisl, luctus at finibus ac, tristique lobortis dolor. Phasellus vitae tortor erat.

Fusce quis mi sed dolor scelerisque ullamcorper. Nullam euismod blandit elit, non luctus sapien ultricies in. Integer in nunc non purus interdum ullamcorper eu ac enim. Sed sit amet tellus risus. Fusce hendrerit neque vitae eros ullamcorper condimentum. Aliquam eu gravida ante. Vivamus id augue tempor, auctor urna at, vestibulum eros. Donec elementum justo non tortor lacinia posuere. Quisque bibendum ex sed lorem euismod volutpat. Vivamus consectetur commodo commodo. Morbi dapibus sit amet libero non fermentum. Vestibulum fringilla est eget risus vehicula, ac rhoncus dolor feugiat.</p>
    </>
  );
}
