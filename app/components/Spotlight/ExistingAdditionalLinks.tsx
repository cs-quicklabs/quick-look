import { useEffect, useState } from 'react';
import DeleteAdditinalLink from './DeleteAdditionalLink';
import EditAdditionalLink from './EditAdditionalLink';

export default function ExistingAdditionalSpotlightLink({setOpenAdditionalLinkForm, setAdditionalLinkUpdateMessage, additionalLinkUpdateMessage, setShowSpotlight,loaderData, mode, setmode}:any) {

const [clickedAdditionalSpotlight, setClickedAdditionalSpotlight] = useState<{ linkText: any; id: any; linkUrl: any; }>({ linkText: '', id: '', linkUrl: '' });
useEffect(() => {
  loaderData?.additionalLinks?.length == 7 ? setOpenAdditionalLinkForm(false) : null;
  
}, [loaderData])
const [showEditAdditional, setShowEditAdditional] = useState(false); 

const toggleEditAdditionalLink = (additionalSpotlight: { linkText: any; id: any; linkUrl: any; }) => {
  setClickedAdditionalSpotlight(prev => prev = additionalSpotlight);
  setShowEditAdditional(true);
}

const [openDeleteAdditionalLink, setOpenDeleteAdditionalLink] = useState(false);

const [deleteAdditionalLink, setDeleteAdditionalLink] = useState({ linkText: '', id: '', linkUrl: '' })

  return (
    <div className={` ${showEditAdditional ? 'pl-3 pr-3.5' : 'border-t border-gray-200 ml-0 mr-0'}`}>
      <ul>
        {loaderData?.additionalLinks.map((additionalSpotlight: { linkText: any; id: any; linkUrl: any; }) => (
          <li key={additionalSpotlight.id} className="">
            {additionalSpotlight.linkText ?
              <>
              <div className={`flex justify-between items-center ${mode === 'mobile' ? 'flex-col xl:flex-row items-center ml-[24rem] lg:ml-[32rem] xl:ml-[0]' : 'flex-col lg:flex-row'}`}>
                <div className='flex flex-col lg:w-screen'>
                  <div className={`flex ${showEditAdditional ? '' : 'border-b border-gray-200 ml-3 mr-2.5 lg:mr-3.5'}`}>
                  <div className="py-4 flex">
                  
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {additionalSpotlight.linkText?.length > 27 ? additionalSpotlight.linkText?.slice(0,27)+'...' :additionalSpotlight.linkText}  </p>
                    <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">
                      {additionalSpotlight?.linkUrl?.length > 22 ? additionalSpotlight?.linkUrl?.slice(0,22)+'...' : additionalSpotlight?.linkUrl}  </p>
                      
                  </div>
                </div>

                <div className={`flex justify-center items-start text-gray-400 mb-2 lg:mb-0   ${mode === 'mobile' ? ' flex-row xl:flex-col ml-[-13rem] lg:ml-[-13rem] xl:ml-[4rem] mt-[5rem]  lg:mt-[5rem] xl:mt-0' : 'flex-row lg:flex-col py-0 lg:py-4 ml-[-13rem] mt-[5rem] lg:ml-[5.2rem] lg:mt-0'} ${clickedAdditionalSpotlight.id === additionalSpotlight.id && showEditAdditional  ? 'hidden' : 'block'}`}>
                  <button
                    data-cy="editExistingAdditionalLink"
                    className="hover:text-indigo-600 text-[14px]"
                    // id={additionalSpotlight.id}
                    onClick={(e: any) => { e.preventDefault(); toggleEditAdditionalLink(additionalSpotlight); }}
                  >
                    Edit
                  </button>
                  
                  <button
                    data-cy="deleteAdditionalLinkButton"
                    onClick={(e: any) => { e.preventDefault(); setOpenDeleteAdditionalLink(true); setDeleteAdditionalLink(additionalSpotlight); }}
                    className={`hover:text-red-600 text-[14px] ${mode === 'mobile' ? 'ml-[1.5rem] xl:ml-0' : 'lg:ml-0 ml-3'}`}>
                    Delete
                  </button>
                  {openDeleteAdditionalLink && 
                  <DeleteAdditinalLink additionalSpotlight={additionalSpotlight} setOpenDeleteAdditionalLink={setOpenDeleteAdditionalLink} deleteAdditionalLink={deleteAdditionalLink} onClose={() => setOpenDeleteAdditionalLink(false)}  />}

                  
                </div>
                  </div>

                  <div>
                  {showEditAdditional && clickedAdditionalSpotlight.id === additionalSpotlight.id && (
                <EditAdditionalLink id={additionalSpotlight.id} clickedAdditionalSpotlight={clickedAdditionalSpotlight} showEditAdditional={showEditAdditional} setShowEditAdditional={setShowEditAdditional} loaderData={loaderData} mode={mode} setmode={setmode} />
              )}

             
                  </div>
                
                
                </div>
                
                
              </div>
              
              </>
              
              : <span></span>}
          </li>
        ))}
        
      </ul>
    </div>
  )
} 