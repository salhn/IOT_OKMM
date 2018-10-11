MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax.SVG,e=a.BBOX;t.mtable.Augment({toSVG:function(n){this.SVGgetStyles();var i=this.SVG(),h=this.SVGgetScale(i);if(0===this.data.length)return this.SVGsaveData(i),i;var l=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width","side","minlabelspacing");l.width.match(/%$/)&&(i.width=l.width=a.Em(a.cwidth/1e3*(parseFloat(l.width)/100)));var s,r,g,d,o,m,f,c,u,S=this.SVGgetMu(i),w=-1,p=[],G=[],V=[],N=[],x=[],M=-1,I=a.FONTDATA.lineH*h*l.useHeight,v=a.FONTDATA.lineD*h*l.useHeight;for(s=0,g=this.data.length;s<g;s++)for(m=this.data[s],o="mlabeledtr"===m.type?w:0,N[s]=[],p[s]=I,G[s]=v,r=o,d=m.data.length+o;r<d;r++){if(null==V[r]&&(r>M&&(M=r),x[r]=e.G(),V[r]=-a.BIGDIMEN),f=m.data[r-o],N[s][r]=f.toSVG(),f.isEmbellished()){c=f.CoreMO();var A=c.Get("minsize",!0);A&&(c.SVGcanStretch("Vertical")?(u=c.SVGdata.h+c.SVGdata.d,u&&(A=a.length2em(A,S,u),A*c.SVGdata.h/u>p[s]&&(p[s]=A*c.SVGdata.h/u),A*c.SVGdata.d/u>G[s]&&(G[s]=A*c.SVGdata.d/u))):c.SVGcanStretch("Horizontal")&&(A=a.length2em(A,S,c.SVGdata.w),A>V[r]&&(V[r]=A)))}N[s][r].h>p[s]&&(p[s]=N[s][r].h),N[s][r].d>G[s]&&(G[s]=N[s][r].d),N[s][r].w>V[r]&&(V[r]=N[s][r].w)}var E=MathJax.Hub.SplitList,b=E(l.columnspacing),T=E(l.rowspacing),H=E(l.columnalign),D=E(l.rowalign),y=E(l.columnlines),L=E(l.rowlines),J=E(l.columnwidth),C=[];for(s=0,g=b.length;s<g;s++)b[s]=a.length2em(b[s],S);for(s=0,g=T.length;s<g;s++)T[s]=a.length2em(T[s],S);for(;b.length<M;)b.push(b[b.length-1]);for(;H.length<=M;)H.push(H[H.length-1]);for(;y.length<M;)y.push(y[y.length-1]);for(;J.length<=M;)J.push(J[J.length-1]);for(;T.length<N.length;)T.push(T[T.length-1]);for(;D.length<=N.length;)D.push(D[D.length-1]);for(;L.length<N.length;)L.push(L[L.length-1]);for(x[w]&&(H[w]="l"===l.side.substr(0,1)?"left":"right",b[w]=-V[w]),s=0,g=N.length;s<g;s++)if(m=this.data[s],C[s]=[],m.rowalign&&(D[s]=m.rowalign),m.columnalign)for(C[s]=E(m.columnalign);C[s].length<=M;)C[s].push(C[s][C[s].length-1]);if(l.equalrows){var O=Math.max.apply(Math,p),R=Math.max.apply(Math,G);for(s=0,g=N.length;s<g;s++)o=(O+R-(p[s]+G[s]))/2,p[s]+=o,G[s]+=o}for(u=p[0]+G[N.length-1],s=0,g=N.length-1;s<g;s++)u+=Math.max(0,G[s]+p[s+1]+T[s]);var F,q=0,X=0,$=u;if("none"!==l.frame||(l.columnlines+l.rowlines).match(/solid|dashed/)){var z=E(l.framespacing);2!=z.length&&(z=E(this.defaults.framespacing)),q=a.length2em(z[0],S),X=a.length2em(z[1],S),$=u+2*X}var B,j,P="";if("string"!=typeof l.align&&(l.align=String(l.align)),l.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)?(P=RegExp.$3||"",l.align=RegExp.$1):l.align=this.defaults.align,""!==P)for(P=parseInt(P),P<0&&(P=N.length+1+P),P<1?P=1:P>N.length&&(P=N.length),B=0,j=-(u+X)+p[0],s=0,g=P-1;s<g;s++){var U=Math.max(0,G[s]+p[s+1]+T[s]);B+=U,j+=U}else B={top:-(p[0]+X),bottom:u+X-p[0],center:u/2-p[0],baseline:u/2-p[0],axis:u/2+a.TeX.axis_height*h-p[0]}[l.align],j={top:-(u+2*X),bottom:0,center:-(u/2+X),baseline:-(u/2+X),axis:a.TeX.axis_height*h-u/2-X}[l.align];var _,k=0,K=0,Q=0,W=0,Y=0,Z=[],tt=[],at=1;if(l.equalcolumns&&"auto"!==l.width){for(_=a.length2em(l.width,S),s=0,g=Math.min(M,b.length);s<g;s++)_-=b[s];for(_/=M,s=0,g=Math.min(M+1,J.length);s<g;s++)V[s]=_}else{for(s=0,g=Math.min(M+1,J.length);s<g;s++)"auto"===J[s]?K+=V[s]:"fit"===J[s]?(tt[Y]=s,Y++,K+=V[s]):J[s].match(/%$/)?(Z[W]=s,W++,Q+=V[s],k+=a.length2em(J[s],S,1)):(V[s]=a.length2em(J[s],S),K+=V[s]);if("auto"===l.width)k>.98?(at=Q/(K+Q),_=K+Q):_=K/(1-k);else for(_=a.length2em(l.width,S),s=0,g=Math.min(M,b.length);s<g;s++)_-=b[s];for(s=0,g=Z.length;s<g;s++)V[Z[s]]=a.length2em(J[Z[s]],S,_*at),K+=V[Z[s]];if(Math.abs(_-K)>.01)if(Y&&_>K)for(_=(_-K)/Y,s=0,g=tt.length;s<g;s++)V[tt[s]]+=_;else for(_/=K,r=0;r<=M;r++)V[r]*=_;if(l.equalcolumns){var et=Math.max.apply(Math,V);for(r=0;r<=M;r++)V[r]=et}}var nt,it,ht=B;for(o=x[w]?w:0,r=o;r<=M;r++){for(x[r].w=V[r],s=0,g=N.length;s<g;s++){if(N[s][r]){if(o="mlabeledtr"===this.data[s].type?w:0,f=this.data[s].data[r-o],f.SVGcanStretch("Horizontal"))N[s][r]=f.SVGstretchH(V[r]);else if(f.SVGcanStretch("Vertical")){c=f.CoreMO();var lt=c.symmetric;c.symmetric=!1,N[s][r]=f.SVGstretchV(p[s],G[s]),c.symmetric=lt}it=f.rowalign||this.data[s].rowalign||D[s],nt={top:p[s]-N[s][r].h,bottom:N[s][r].d-G[s],center:(p[s]-G[s]-(N[s][r].h-N[s][r].d))/2,baseline:0,axis:0}[it]||0,it=f.columnalign||C[s][r]||H[r],x[r].Align(N[s][r],it,0,ht+nt)}s<N.length-1&&(ht-=Math.max(0,G[s]+p[s+1]+T[s]))}ht=B}var st=1.5*a.em,rt=q-st/2;for(r=0;r<=M;r++)i.Add(x[r],rt,0),rt+=V[r]+b[r],"none"!==y[r]&&r<M&&r!==w&&i.Add(e.VLINE($,st,y[r]),rt-b[r]/2,j);for(i.w+=q,i.d=-j,i.h=$+j,F=i.w,"none"!==l.frame&&(i.Add(e.HLINE(F,st,l.frame),0,j+$-st),i.Add(e.HLINE(F,st,l.frame),0,j),i.Add(e.VLINE($,st,l.frame),0,j),i.Add(e.VLINE($,st,l.frame),F-st,j)),ht=B-st/2,s=0,g=N.length-1;s<g;s++)nt=Math.max(0,G[s]+p[s+1]+T[s]),L[s]!==t.LINES.NONE&&""!==L[s]&&i.Add(e.HLINE(F,st,L[s]),0,ht-G[s]-(nt-G[s]-p[s+1])/2),ht-=nt;if(i.Clean(),this.SVGhandleSpace(i),this.SVGhandleColor(i),x[w]){i.tw=Math.max(i.w,i.r)-Math.min(0,i.l);var gt=this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");gt.indentalignfirst!==t.INDENTALIGN.INDENTALIGN&&(gt.indentalign=gt.indentalignfirst),gt.indentalign===t.INDENTALIGN.AUTO&&(gt.indentalign=this.displayAlign),gt.indentshiftfirst!==t.INDENTSHIFT.INDENTSHIFT&&(gt.indentshift=gt.indentshiftfirst),"auto"!==gt.indentshift&&""!==gt.indentshift||(gt.indentshift="0");var dt=a.length2em(gt.indentshift,S,a.cwidth),ot=a.length2em(l.minlabelspacing,S,a.cwidth),mt=ot+x[w].w,ft=0,ct=i.w,ut=a.length2em(this.displayIndent,S,a.cwidth);if(o=H[w]===t.INDENTALIGN.RIGHT?-1:1,gt.indentalign===t.INDENTALIGN.CENTER){var St=(a.cwidth-ct)/2;dt+=ut,mt+o*ft>St+o*dt&&(gt.indentalign=H[w],dt=o*(mt+o*ft),ct+=mt+Math.max(0,dt))}else H[w]===gt.indentalign?(ut<0&&(ft=o*ut,ut=0),dt+=o*ut,mt>o*dt&&(dt=o*mt),dt+=ft,ct+=o*dt):(dt-=o*ut,ct-o*dt+mt>a.cwidth&&(dt=o*(ct+mt-a.cwidth),o*dt>0&&(ct=a.cwidth+o*dt,dt=0)));var wt=i;i=this.SVG(),i.hasIndent=!0,i.w=i.r=Math.max(ct,a.cwidth),i.Align(x[w],H[w],0,0,ft),i.Align(wt,gt.indentalign,0,0,dt),i.tw=ct}return this.SVGsaveData(i),i},SVGhandleSpace:function(t){this.hasFrame||t.width||(t.x=t.X=167),this.SUPER(arguments).SVGhandleSpace.call(this,t)}}),t.mtd.Augment({toSVG:function(t,a){var e=this.svg=this.SVG();return this.data[0]&&(e.Add(this.SVGdataStretched(0,t,a)),e.Clean()),this.SVGhandleColor(e),this.SVGsaveData(e),e}}),MathJax.Hub.Startup.signal.Post("SVG mtable Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/mtable.js")});