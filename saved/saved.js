
                                    //         else if(issvg)
                                    //         {
                                    // 
                                    // 
                                    //             encoded = 'data:image/svg+xml;base64,'+btoa(reader.result);
                                    //             uncoded = reader.result;
                                    // 
                                    // 
                                    //             // save data into box obj 
                                    // 
                                    //             stepbox.file.name         = steppedfile.name.split('.'+fext)[0]+'';
                                    //             stepbox.file.encoding     = encoded.split('base64,')[0]+'base64';
                                    //             stepbox.file.coversion    = 'base64/svgxml';
                                    //             stepbox.file.originaltype = fext;
                                    //             stepbox.file.size         = (~~((steppedfile.size/1000))/1024).toFixed(3) +' Mb';
                                    //             stepbox.file.path         = fileurl.split('blob:')[1];
                                    //             stepbox.file.blob         = blobURL.split('blob:')[1];
                                    //             stepbox.file.encoded      = encoded;
                                    //             stepbox.file.uncoded      = uncoded;
                                    // 
                                    //             // save data into datalist
                                    //             uploader.output.contents.push(encoded);
                                    // 
                                    //             // send action data for single box
                                    //             deletesingle(uploader); // reloadsingle(uploader,step);
                                    // 
                                    // 
                                    //             reader = null; 
                                    // 
                                    //             // up step & restart or exit
                                    //             if( step+1 < allfiles.length )
                                    //             {
                                    //                 removelazy(stepbox.container);
                                    //                 loop_uploaderdata(allfiles,step++);
                                    //             } 
                                    //             else
                                    //             {
                                    //                 removelazy(stepbox.container);
                                    //                 printfilesdata(uploader);
                                    //             }
                                    // 
                                    // 
                                    //         }
                                    //         else if(isVideo)
                                    //         {
                                    // 
                                    // 
                                    //             let projector       = document.createElement("VIDEO");                                        
                                    //             projector.src       = fileurl;
                                    //             projector.controls  = true;
                                    //             projector.load();
                                    // 
                                    // 
                                    //             // projector.onloadedmetadata = () => { projector.currentTime =  Math.ceil(projector.duration / 2); }
                                    // 
                                    //             projector.oncanplay = () => {
                                    // 
                                    //                 // fileurl.onloadedmetadata = () => {
                                    //                 //   console.log('loaded. ');
                                    //                 // };
                                    // 
                                    //                 let canvas      = document.createElement('canvas'),
                                    //                     maxw        = uploader.mediasettings.maxWidth,
                                    //                     maxh        = uploader.mediasettings.maxHeight,
                                    //                     width       = projector.videoWidth,
                                    //                     height      = projector.videoHeight,
                                    //                     compression = uploader.mediasettings.quality,
                                    //                     output;
                                    // 
                                    //                 if (width > height && width > maxw) { height = ~~(height *= maxw / width); width = maxw; }
                                    //                 else if (height >= maxh) { width = ~~(width *= maxh / height); height = maxh; }
                                    // 
                                    //                 canvas.width = width;
                                    //                 canvas.height = height;
                                    //                 canvas.getContext("2d").drawImage(projector, 0, 0, width, height);
                                    // 
                                    //                 encoded = canvas.toDataURL('image/png',compression);
                                    //                 uncoded = btoa(reader.result);
                                    // 
                                    //                 stepbox.file.name         = steppedfile.name.split('.'+fext)[0]+'';
                                    //                 stepbox.file.encoding     = 'video/base64FromBinary';
                                    //                 stepbox.file.coversion    = 'base64/Binaryfile';
                                    //                 stepbox.file.originaltype = fext;
                                    //                 stepbox.file.size         = (~~((steppedfile.size/1000))/1024).toFixed(3) +' Mb';
                                    //                 stepbox.file.path         = fileurl.split('blob:')[1];
                                    //                 stepbox.file.blob         = blobURL.split('blob:')[1];
                                    //                 stepbox.file.encoded      = encoded;
                                    //                 stepbox.file.uncoded      = uncoded;
                                    // 
                                    // 
                                    //                 // save data into datalist
                                    //                 uploader.output.contents.push(encoded);
                                    // 
                                    //                 // send action data for single box
                                    //                 deletesingle(uploader);
                                    // 
                                    // 
                                    //                 reader = null; canvas=null; projector=null; 
                                    // 
                                    // 
                                    //                 // up step & restart or exit
                                    //                 if( step+1 < allfiles.length )
                                    //                 {
                                    //                     removelazy(stepbox.container);
                                    //                     loop_uploaderdata(allfiles,step++);
                                    //                 } 
                                    //                 else
                                    //                 {
                                    //                     removelazy(stepbox.container);
                                    //                     printfilesdata(uploader);
                                    //                 }
                                    // 
                                    //             }
                                    // 
                                    // 
                                    //         }
                                    //         else if(isSound)
                                    //         {
                                    // 
                                    //             // let soundBuffer = new window.AudioContext();
                                    //             // function playbuffer(sound,buffer)
                                    //             // {
                                    //             //     sound.decodeAudioData(buffer,
                                    //             //         buffering => {
                                    //             //             source = sound.createBufferSource();
                                    //             //             source.connect(sound.destination);
                                    //             //             source.buffer = buffering;
                                    //             //             source.start(0);
                                    //             // 
                                    //             //             savesound();
                                    //             // 
                                    //             //         })
                                    //             // 
                                    //             // }
                                    //             // playbuffer(soundBuffer,reader.result)
                                    // 
                                    // 
                                    //             // create a temp img
                                    //             let sound = new Audio();
                                    // 
                                    //             sound.src = reader.result;
                                    //             sound.controls = false;
                                    //             sound.load();
                                    // 
                                    //             sound.oncanplay = () => {
                                    // 
                                    //                 // sound.play();
                                    // 
                                    //                 encoded = reader.result;
                                    // 
                                    //                 stepbox.file.name         = steppedfile.name.split('.'+fext)[0]+'';
                                    //                 stepbox.file.encoding     = encoded.split('base64,')[0]+'base64';;
                                    //                 stepbox.file.coversion    = 'audio/mpeg';
                                    //                 stepbox.file.originaltype = fext;
                                    //                 stepbox.file.size         = (~~((steppedfile.size/1000))/1024).toFixed(3) +' Mb';
                                    //                 stepbox.file.path         = fileurl.split('blob:')[1];
                                    //                 stepbox.file.blob         = blobURL.split('blob:')[1];
                                    //                 stepbox.file.encoded      = encoded;
                                    //                 stepbox.file.uncoded      = 'no data';
                                    // 
                                    //                 // save data into datalist
                                    //                 uploader.output.contents.push(encoded);
                                    // 
                                    //                 // send action data for single box
                                    //                 deletesingle(uploader);
                                    // 
                                    // 
                                    //                 reader = null; sound = null;
                                    // 
                                    // 
                                    //                 // up step & restart or exit
                                    //                 if( step+1 < allfiles.length )
                                    //                 {
                                    //                     removelazy(stepbox.container);
                                    //                     loop_uploaderdata(allfiles,step++);
                                    //                 } 
                                    //                 else
                                    //                 {
                                    //                     removelazy(stepbox.container);
                                    //                     printfilesdata(uploader);
                                    //                 }
                                    // 
                                    //             }
                                    // 
                                    //         }
                                    //         else
                                    //         {
                                    // 
                                    //             encoded = btoa(reader.result);
                                    // 
                                    //             stepbox.file.name         = steppedfile.name.split('.'+fext)[0]+'';
                                    //             stepbox.file.encoding     = 'file/base64FromBinary';
                                    //             stepbox.file.coversion    = 'base64/Binaryfile';
                                    //             stepbox.file.originaltype = fext;
                                    //             stepbox.file.size         = (~~((steppedfile.size/1000))/1024).toFixed(3) +' Mb';
                                    //             stepbox.file.path         = fileurl.split('blob:')[1];
                                    //             stepbox.file.blob         = blobURL.split('blob:')[1];
                                    //             stepbox.file.encoded      = encoded;
                                    //             stepbox.file.uncoded      = 'no data';
                                    // 
                                    //             // save data into datalist
                                    //             uploader.output.contents.push( encoded );
                                    // 
                                    //             // send action data for single box
                                    //             deletesingle(uploader);
                                    // 
                                    //             reader = null; //GETURL.revokeObjectURL(steppedfile);
                                    // 
                                    // 
                                    //             // up step & restart or exit
                                    //             if( step+1 < allfiles.length )
                                    //             { 
                                    //                 removelazy(stepbox.container);
                                    //                 loop_uploaderdata(allfiles,step++);
                                    //             }
                                    //             else
                                    //             {
                                    //                 removelazy(stepbox.container);
                                    //                 printfilesdata(uploader);
                                    //             } 
                                    // 
                                    //         }
                                    // 
                                    //     }
                                    //     else
                                    //     {
                                    // 
                                    //         encoded = btoa(reader.result);
                                    // 
                                    //         stepbox.file.name         = steppedfile.name.split('.'+fext)[0]+'';
                                    //         stepbox.file.encoding     = 'file/base64FromBinary';
                                    //         stepbox.file.coversion    = 'base64/Binaryfile';
                                    //         stepbox.file.originaltype = fext;
                                    //         stepbox.file.size         = (~~((steppedfile.size/1000))/1024).toFixed(3) +' Mb';
                                    //         stepbox.file.path         = fileurl.split('blob:')[1];
                                    //         stepbox.file.blob         = blobURL.split('blob:')[1];
                                    //         stepbox.file.encoded      = encoded;
                                    //         stepbox.file.uncoded      = 'no data';
                                    // 
                                    //         // save data into datalist
                                    //         uploader.output.contents.push( encoded );
                                    // 
                                    //         // send action data for single box
                                    //         deletesingle(uploader);
                                    // 
                                    //         reader = null; //GETURL.revokeObjectURL(steppedfile);
                                    // 
                                    // 
                                    //         // up step & restart or exit
                                    //         if( step+1 < allfiles.length )
                                    //         { 
                                    //             removelazy(stepbox.container);
                                    //             loop_uploaderdata(allfiles,step++);
                                    //         }
                                    //         else
                                    //         {
                                    //             removelazy(stepbox.container);
                                    //             printfilesdata(uploader);
                                    //         } 
                                    // 
                                    //     }
                                    // 
                                    // 
                                    // }

                                    /////// this is the real model for chunks:
                                    // // blob    = new Blob([readed]);
                                    // // blobURL = GETURL.createObjectURL(blob),
                                    // // fileurl = GETURL.createObjectURL(steppedfile);
                                    // 
                                    // encoded =  btoa(readed);
                                    // uncoded =  readed;
                                    // 
                                    // bar.previousElementSibling.classList.add('lazy-off')
                                    // bar.previousElementSibling.classList.remove('lazy-on')
                                    // bar.classList.remove('hide');
                                    // 
                                    // 
                                    // stepbox.file.name         = steppedfile.name.split('.'+fext)[0]+'';
                                    // stepbox.file.encoding     = 'file/base64FromBinary';
                                    // stepbox.file.coversion    = 'base64/Binaryfile';
                                    // stepbox.file.originaltype = fext;
                                    // stepbox.file.size         = (~~((steppedfile.size/1000))/1024).toFixed(3) +' Mb';
                                    // // stepbox.file.path         = fileurl.split('blob:')[1];
                                    // // stepbox.file.blob         = blobURL.split('blob:')[1];
                                    // stepbox.file.encoded      = encoded;
                                    // stepbox.file.uncoded      = uncoded;
                                    // 
                                    // // save data into datalist
                                    // uploader.output.contents.push( encoded );
                                    // 
                                    // // send action data for single box
                                    // // deletesingle(uploader);
                                    // 
                                    // reader = null; //GETURL.revokeObjectURL(steppedfile);
                                    // 
                                    // 
                                    // // up step & restart or exit
                                    // // if( step+1 < allfiles.length )
                                    // // { 
                                    // //     removelazy(stepbox.container);
                                    // //     // loop_uploaderdata(allfiles,step++);
                                    // // }
                                    // // else
                                    // // {
                                    // //     removelazy(stepbox.container);
                                    // //     // printfilesdata(uploader);
                                    // // }