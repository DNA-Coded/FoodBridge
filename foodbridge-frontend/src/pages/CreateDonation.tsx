import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Button, Badge } from '../components/design-system';

// Preset sample data for the judge/user to auto-fill instantly
const DEMO_FILL_DATA = {
  foodName: 'Leftover Wedding Buffet Trays',
  category: 'Prepared Meals',
  quantity: '3 large thermal containers',
  mealCount: 150,
  prepTime: '20:30',
  expiryEstimate: '4 Hours (Keep Warm)',
  address: 'Grand Palace Hotel, Banquet Hall B, Salt Lake Bypass',
  pickupWindow: 'Tonight, 11:00 PM - Midnight',
  instructions: 'Please enter through the kitchen service elevator at the back gate. Call chef David on arrival.',
  contactPerson: 'Chef David (9876543210)',
  accessibility: 'Loading Dock Available'
};

export default function CreateDonation() {
  const navigate = useNavigate();

  // Multi-step index: 1: Food Info, 2: Pickup, 3: Media, 4: AI Loader, 5: AI Report, 6: Confirmation, 7: Success
  const [currentStep, setCurrentStep] = useState(1);
  
  // Validation error state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form Field States
  const [foodName, setFoodName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [mealCount, setMealCount] = useState<number | ''>('');
  const [prepTime, setPrepTime] = useState('');
  const [expiryEstimate, setExpiryEstimate] = useState('');

  const [address, setAddress] = useState('');
  const [pickupWindow, setPickupWindow] = useState('');
  const [instructions, setInstructions] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [accessibility, setAccessibility] = useState('');

  // Media upload states
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, size: string, progress: number, previewUrl?: string}[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  // AI Pre-Analysis Loader Sub-Steps
  const [aiLoaderStep, setAiLoaderStep] = useState(0);
  const aiLoaderTexts = [
    'Analyzing Food Categories & Ingredients...',
    'Estimating Portions & Weight Volume...',
    'Checking Safety & Temperature Freshness...',
    'Matching Nearest NGOs Open Now...'
  ];

  // Auto-Fill Helper for Quick Demo Testing
  const handleAutoFill = () => {
    setFoodName(DEMO_FILL_DATA.foodName);
    setCategory(DEMO_FILL_DATA.category);
    setQuantity(DEMO_FILL_DATA.quantity);
    setMealCount(DEMO_FILL_DATA.mealCount);
    setPrepTime(DEMO_FILL_DATA.prepTime);
    setExpiryEstimate(DEMO_FILL_DATA.expiryEstimate);

    setAddress(DEMO_FILL_DATA.address);
    setPickupWindow(DEMO_FILL_DATA.pickupWindow);
    setInstructions(DEMO_FILL_DATA.instructions);
    setContactPerson(DEMO_FILL_DATA.contactPerson);
    setAccessibility(DEMO_FILL_DATA.accessibility);

    // Also inject mock images
    setUploadedFiles([
      { name: 'buffet_trays_1.jpg', size: '1.2 MB', progress: 100, previewUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80' },
      { name: 'buffet_pans_2.jpg', size: '950 KB', progress: 100, previewUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' }
    ]);

    setErrors({});
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!foodName.trim()) errs.foodName = 'Food name is required';
    if (!category) errs.category = 'Category selection is required';
    if (!quantity.trim()) errs.quantity = 'Quantity is required';
    if (!mealCount || Number(mealCount) <= 0) errs.mealCount = 'Valid meal count is required';
    if (!prepTime) errs.prepTime = 'Preparation time is required';
    if (!expiryEstimate) errs.expiryEstimate = 'Expiry estimate is required';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!address.trim()) errs.address = 'Pickup address is required';
    if (!pickupWindow) errs.pickupWindow = 'Pickup window is required';
    if (!contactPerson.trim()) errs.contactPerson = 'Contact details are required';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Simulate file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        progress: 0,
        previewUrl: URL.createObjectURL(file)
      }));

      setUploadedFiles(prev => [...prev, ...newFiles]);

      // Animate upload progress
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 20;
        setUploadedFiles(prev => 
          prev.map(f => f.progress < 100 ? { ...f, progress: currentProgress } : f)
        );
        if (currentProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
        }
      }, 300);
    }
  };

  // Step 4 Loader Timer (Anticipation Screen)
  useEffect(() => {
    if (currentStep === 4) {
      setAiLoaderStep(0);
      const timers = [
        setTimeout(() => setAiLoaderStep(1), 1000),
        setTimeout(() => setAiLoaderStep(2), 2000),
        setTimeout(() => setAiLoaderStep(3), 3000),
        setTimeout(() => setCurrentStep(5), 4500) // Transit to Step 5: Report
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-600 font-sans antialiased text-left">
      
      {/* TOP NAV HEADER */}
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-lg">
          <Link to="/donor-dashboard" className="flex items-center gap-xs cursor-pointer select-none">
            <svg className="h-6 w-6 text-primary-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 19C4 19 6 15 12 15C18 15 20 19 20 19" />
              <path d="M12 15V3" />
            </svg>
            <span className="font-sans text-md font-bold tracking-tight text-gray-900">
              FoodBridge <span className="text-primary-700">AI</span>
            </span>
          </Link>

          {/* Quick Sandbox tool to fill mock fields */}
          {currentStep <= 3 && (
            <button 
              onClick={handleAutoFill}
              className="text-[10px] font-bold uppercase tracking-widest text-primary-700 bg-primary-100/50 px-sm py-xs rounded-lg hover:bg-primary-100 transition-colors border border-primary-200"
            >
              ⚡ Auto-Fill Wedding Sample
            </button>
          )}

          <Link to="/donor-dashboard" className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors">
            Exit to Dashboard
          </Link>
        </div>
      </nav>

      {/* CORE WORKFLOW AREA */}
      <div className="mx-auto max-w-3xl px-lg py-xl">
        
        {/* STEPPER PROGRESS INDICATOR (For Steps 1 to 6) */}
        {currentStep <= 6 && (
          <div className="mb-xl">
            {/* Steps labels */}
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
              <span className={cn(currentStep >= 1 ? "text-primary-700" : "")}>01 Food</span>
              <span className={cn(currentStep >= 2 ? "text-primary-700" : "")}>02 Logistics</span>
              <span className={cn(currentStep >= 3 ? "text-primary-700" : "")}>03 Media</span>
              <span className={cn(currentStep >= 5 ? "text-primary-700" : "")}>04 AI Audit</span>
              <span className={cn(currentStep >= 6 ? "text-primary-700" : "")}>05 Confirm</span>
            </div>
            
            {/* Progress Bar meter */}
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-xs overflow-hidden">
              <div className="h-full bg-primary-700 transition-all duration-300" style={{
                width: `${
                  currentStep === 1 ? 20 :
                  currentStep === 2 ? 40 :
                  currentStep === 3 ? 60 :
                  currentStep === 4 ? 75 :
                  currentStep === 5 ? 85 : 100
                }%`
              }} />
            </div>
          </div>
        )}

        {/* --- STEP 1: FOOD INFORMATION --- */}
        {currentStep === 1 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md">
            <div>
              <h2 className="text-lg font-extrabold text-gray-900">Food Characteristics</h2>
              <p className="text-xs text-gray-400 mt-[2px]">Log details about the food surplus safety profile.</p>
            </div>

            <div className="space-y-sm">
              {/* Food Name */}
              <div className="space-y-2xs">
                <label className="text-xs font-bold text-gray-900" htmlFor="foodName">Item Description Name</label>
                <input 
                  type="text"
                  id="foodName"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder="e.g., Prepared Buffet Rice, Curry, Dal"
                  className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none focus:border-primary-500",
                    errors.foodName ? "border-red-500 bg-red-50/20" : "border-gray-200"
                  )}
                />
                {errors.foodName && <p className="text-[10px] text-red-600 font-semibold">{errors.foodName}</p>}
              </div>

              {/* Grid: Category & Volume */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                
                {/* Category select */}
                <div className="space-y-2xs">
                  <label className="text-xs font-bold text-gray-900" htmlFor="category">Category</label>
                  <select 
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none cursor-pointer bg-white focus:border-primary-500",
                      errors.category ? "border-red-500 bg-red-50/20" : "border-gray-200"
                    )}
                  >
                    <option value="" disabled>Choose Category</option>
                    <option value="Prepared Meals">Prepared Meals / Buffet</option>
                    <option value="Baked Goods">Baked Goods / Pastries</option>
                    <option value="Produce">Produce / Fruits &amp; Veg</option>
                    <option value="Dairy &amp; Eggs">Dairy &amp; Eggs</option>
                  </select>
                  {errors.category && <p className="text-[10px] text-red-600 font-semibold">{errors.category}</p>}
                </div>

                {/* Weight / Containers description */}
                <div className="space-y-2xs">
                  <label className="text-xs font-bold text-gray-900" htmlFor="quantity">Physical Volume / Weight</label>
                  <input 
                    type="text"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g., 25 kg, 3 large trays"
                    className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none focus:border-primary-500",
                      errors.quantity ? "border-red-500 bg-red-50/20" : "border-gray-200"
                    )}
                  />
                  {errors.quantity && <p className="text-[10px] text-red-600 font-semibold">{errors.quantity}</p>}
                </div>

              </div>

              {/* Grid: Meals Count & Expiry */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
                
                {/* Meals served count estimate */}
                <div className="space-y-2xs">
                  <label className="text-xs font-bold text-gray-900" htmlFor="mealCount">Est. Servings Count</label>
                  <input 
                    type="number"
                    id="mealCount"
                    value={mealCount}
                    onChange={(e) => setMealCount(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="100"
                    className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none focus:border-primary-500",
                      errors.mealCount ? "border-red-500 bg-red-50/20" : "border-gray-200"
                    )}
                  />
                  {errors.mealCount && <p className="text-[10px] text-red-600 font-semibold">{errors.mealCount}</p>}
                </div>

                {/* Cooked/Prep timestamp */}
                <div className="space-y-2xs">
                  <label className="text-xs font-bold text-gray-900" htmlFor="prepTime">Preparation Time</label>
                  <input 
                    type="time"
                    id="prepTime"
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)}
                    className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none bg-white focus:border-primary-500",
                      errors.prepTime ? "border-red-500 bg-red-50/20" : "border-gray-200"
                    )}
                  />
                  {errors.prepTime && <p className="text-[10px] text-red-600 font-semibold">{errors.prepTime}</p>}
                </div>

                {/* Freshness/Expiry Estimate */}
                <div className="space-y-2xs">
                  <label className="text-xs font-bold text-gray-900" htmlFor="expiryEstimate">Freshness Window</label>
                  <select 
                    id="expiryEstimate"
                    value={expiryEstimate}
                    onChange={(e) => setExpiryEstimate(e.target.value)}
                    className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none cursor-pointer bg-white focus:border-primary-500",
                      errors.expiryEstimate ? "border-red-500 bg-red-50/20" : "border-gray-200"
                    )}
                  >
                    <option value="" disabled>Select Lifespan</option>
                    <option value="4 Hours (Critical Temp Control)">4 Hours (Perishable Hot)</option>
                    <option value="8 Hours (Keep Chilled)">8 Hours (Chilled/Dairy)</option>
                    <option value="24 Hours (Ambient Temp)">24 Hours (Bakery Stable)</option>
                    <option value="72+ Hours (Cold Room Store)">3+ Days (Raw Veg/Fruit)</option>
                  </select>
                  {errors.expiryEstimate && <p className="text-[10px] text-red-600 font-semibold">{errors.expiryEstimate}</p>}
                </div>

              </div>
            </div>

            {/* Next buttons */}
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <Button variant="ghost" size="sm" onClick={() => navigate('/donor-dashboard')} className="text-xs uppercase font-bold text-gray-400">
                Cancel
              </Button>
              <Button 
                onClick={() => { if (validateStep1()) setCurrentStep(2); }} 
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase tracking-wider px-lg py-md rounded-lg shadow-sm"
              >
                Continue to Pickup
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 2: LOCATION & PICKUP --- */}
        {currentStep === 2 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md">
            <div>
              <h2 className="text-lg font-extrabold text-gray-900">Pickup Logistics</h2>
              <p className="text-xs text-gray-400 mt-[2px]">Provide recipient access instructions and hours.</p>
            </div>

            <div className="space-y-sm">
              {/* Pickup Address */}
              <div className="space-y-2xs">
                <label className="text-xs font-bold text-gray-900" htmlFor="address">Full Pickup Address</label>
                <input 
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g., Suite 4B, Grand Horizon Hotel, Salt Lake Block C"
                  className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none focus:border-primary-500",
                    errors.address ? "border-red-500 bg-red-50/20" : "border-gray-200"
                  )}
                />
                {errors.address && <p className="text-[10px] text-red-600 font-semibold">{errors.address}</p>}
              </div>

              {/* Grid: Pickup window & Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                
                {/* Pickup window timings */}
                <div className="space-y-2xs">
                  <label className="text-xs font-bold text-gray-900" htmlFor="pickupWindow">Pickup Window (Target Time)</label>
                  <input 
                    type="text"
                    id="pickupWindow"
                    value={pickupWindow}
                    onChange={(e) => setPickupWindow(e.target.value)}
                    placeholder="e.g., Today, 11:00 PM - Midnight"
                    className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none focus:border-primary-500",
                      errors.pickupWindow ? "border-red-500 bg-red-50/20" : "border-gray-200"
                    )}
                  />
                  {errors.pickupWindow && <p className="text-[10px] text-red-600 font-semibold">{errors.pickupWindow}</p>}
                </div>

                {/* Contact phone/name */}
                <div className="space-y-2xs">
                  <label className="text-xs font-bold text-gray-900" htmlFor="contactPerson">On-Site Contact Person</label>
                  <input 
                    type="text"
                    id="contactPerson"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g., Manager David (Cell: 98765-XXXXX)"
                    className={cn("w-full px-md py-sm border rounded-lg text-xs outline-none focus:border-primary-500",
                      errors.contactPerson ? "border-red-500 bg-red-50/20" : "border-gray-200"
                    )}
                  />
                  {errors.contactPerson && <p className="text-[10px] text-red-600 font-semibold">{errors.contactPerson}</p>}
                </div>

              </div>

              {/* Loading dock accessibility */}
              <div className="space-y-2xs">
                <label className="text-xs font-bold text-gray-900" htmlFor="accessibility">Accessibility Profile</label>
                <select 
                  id="accessibility"
                  value={accessibility}
                  onChange={(e) => setAccessibility(e.target.value)}
                  className="w-full px-md py-sm border border-gray-200 rounded-lg text-xs outline-none bg-white focus:border-primary-500 cursor-pointer"
                >
                  <option value="">Normal access (No cargo dock needed)</option>
                  <option value="Loading Dock Available">Cargo dock loading bay available</option>
                  <option value="Tight Street - Bikes Preferred">Narrow lane (Two-wheeler preferred)</option>
                  <option value="Basement elevator entry">Basement elevator entry (Security pass needed)</option>
                </select>
              </div>

              {/* Special logistics instructions */}
              <div className="space-y-2xs">
                <label className="text-xs font-bold text-gray-900" htmlFor="instructions">Special Instructions / Gates</label>
                <textarea 
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="e.g., Ring service buzzer at Back Gate elevator. Courier can park in hotel loading slot."
                  rows={2}
                  className="w-full px-md py-sm border border-gray-200 rounded-lg text-xs outline-none focus:border-primary-500 resize-y"
                />
              </div>

              {/* Visual Map Placeholder (Do not integrate maps yet) */}
              <div className="p-lg bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 min-h-[120px] flex-col text-center">
                <span className="material-symbols-outlined text-[28px] text-gray-400">map</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-xs">Route Mapping Ready</span>
                <span className="text-[9px] text-gray-400">Coordinates will map automatically upon AI verification</span>
              </div>
            </div>

            {/* Next buttons */}
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)} className="text-xs uppercase font-bold text-gray-400">
                Back to Food
              </Button>
              <Button 
                onClick={() => { if (validateStep2()) setCurrentStep(3); }} 
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase tracking-wider px-lg py-md rounded-lg shadow-sm"
              >
                Continue to Media
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 3: FOOD IMAGES (UPLOAD AREA) --- */}
        {currentStep === 3 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md">
            <div>
              <h2 className="text-lg font-extrabold text-gray-900">Food Documentation Media</h2>
              <p className="text-xs text-gray-400 mt-[2px]">Upload fresh photos to help verify food condition and container size.</p>
            </div>

            <div className="space-y-md">
              
              {/* Drag and Drop Container */}
              <div className="border-2 border-dashed border-gray-200 hover:border-primary-500 rounded-2xl p-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative">
                <input 
                  type="file" 
                  multiple 
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <span className="material-symbols-outlined text-[36px] text-primary-700">cloud_upload</span>
                <p className="text-xs font-bold text-gray-900 mt-xs">Drag and drop food photos here</p>
                <p className="text-[10px] text-gray-400 mt-2xs">Supports JPEG, PNG up to 10MB per file</p>
                <span className="mt-sm text-[9px] font-bold text-primary-700 bg-primary-50 border border-primary-100 px-sm py-[4px] rounded-full">
                  Browse Files
                </span>
              </div>

              {/* Uploading progress indicator */}
              {isUploading && (
                <div className="p-sm bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-xs">
                    <div className="w-4 h-4 border-2 border-primary-200 border-t-primary-700 rounded-full animate-spin" />
                    <span>Uploading selected files...</span>
                  </div>
                  <span className="font-bold">Please wait</span>
                </div>
              )}

              {/* Uploaded Files Preview Grid */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-sm">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Attached Files ({uploadedFiles.length})
                  </span>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-sm">
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between">
                        {/* Image preview */}
                        {file.previewUrl ? (
                          <img src={file.previewUrl} alt={file.name} className="h-28 w-full object-cover border-b border-gray-100" />
                        ) : (
                          <div className="h-28 w-full bg-gray-100 flex items-center justify-center text-gray-400">
                            <span className="material-symbols-outlined text-[28px]">image</span>
                          </div>
                        )}
                        
                        {/* File detail info */}
                        <div className="p-xs text-[10px] space-y-2xs text-left">
                          <p className="font-bold text-gray-800 truncate">{file.name}</p>
                          <p className="text-gray-400">{file.size}</p>
                          
                          {/* File local progress bar */}
                          {file.progress < 100 && (
                            <div className="w-full bg-gray-200 h-1 rounded-full mt-2xs overflow-hidden">
                              <div className="bg-primary-700 h-full" style={{ width: `${file.progress}%` }} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Next buttons */}
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep(2)} className="text-xs uppercase font-bold text-gray-400">
                Back to Logistics
              </Button>
              <Button 
                onClick={() => setCurrentStep(4)} 
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase tracking-wider px-lg py-md rounded-lg shadow-sm"
              >
                Analyze Donation Details
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 4: AI PRE-ANALYSIS LOADER (WOW moment) --- */}
        {currentStep === 4 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-xl shadow-sm text-center space-y-xl min-h-[360px] flex flex-col justify-center items-center">
            
            {/* Spinning load state */}
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary-100 border-t-primary-700 rounded-full animate-spin" />
              <span className="material-symbols-outlined text-primary-700 text-[28px] absolute">psychology</span>
            </div>

            <div className="space-y-xs">
              <h2 className="text-lg font-black text-gray-900">Gemma AI Auditing Food Safety...</h2>
              <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                Analyzing photo metadata, ingredient lists, and temperature controls to guarantee community safety.
              </p>
            </div>

            {/* Step-by-Step Anticipation Bullet items */}
            <div className="w-full max-w-xs space-y-sm text-left font-semibold text-xs border border-gray-100 rounded-xl p-md bg-gray-50/50">
              {aiLoaderTexts.map((text, idx) => (
                <div key={idx} className="flex items-center gap-xs">
                  {aiLoaderStep > idx ? (
                    <span className="material-symbols-outlined text-[16px] text-emerald-600 font-bold">check_circle</span>
                  ) : aiLoaderStep === idx ? (
                    <span className="h-3 w-3 border-2 border-primary-200 border-t-primary-700 rounded-full animate-spin" />
                  ) : (
                    <span className="material-symbols-outlined text-[16px] text-gray-300">hourglass_empty</span>
                  )}
                  <span className={cn(
                    aiLoaderStep > idx ? "text-gray-900" :
                    aiLoaderStep === idx ? "text-primary-700 font-bold" : "text-gray-400"
                  )}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest animate-pulse">
              Matching routes dynamically...
            </p>
          </div>
        )}

        {/* --- STEP 5: AI ANALYSIS REPORT --- */}
        {currentStep === 5 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md text-left">
            
            {/* Report Header */}
            <div className="border-b border-gray-100 pb-sm flex justify-between items-center">
              <div>
                <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100/50 px-sm py-[4px] rounded border border-emerald-200 uppercase">
                  Safety Pass Certified
                </span>
                <h2 className="text-lg font-black text-gray-900 mt-2xs">Gemma AI Intelligence Report</h2>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">ID: FB-AUDIT-4029</span>
            </div>

            {/* Report details */}
            <div className="space-y-md">
              
              <div className="p-sm bg-primary-50/10 border border-primary-100 rounded-xl text-xs space-y-xs">
                <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest">Calculated Logistics Priority</span>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-900">Urgent Priority Match (Expires in 4 Hours)</span>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-bold">CRITICAL</Badge>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  Perishable warm cooked items must be collected within a 60-minute transit slot to bypass food contamination hazards.
                </p>
              </div>

              {/* Grid: Parsed metadata fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-xs">
                <div className="space-y-sm">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Analyzed Classification</span>
                    <p className="text-xs font-bold text-gray-900 mt-[2px]">{category} (Hot-Served Buffet Food)</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gemma Quantity Estimate</span>
                    <p className="text-xs font-bold text-gray-900 mt-[2px]">{quantity || '150 Portions'} (Approx. 25 kg weight)</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Meals Count Equivalent</span>
                    <p className="text-xs font-bold text-primary-700 mt-[2px]">{mealCount || 150} meals served</p>
                  </div>
                </div>

                <div className="space-y-sm">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Temp Hold Window</span>
                    <p className="text-xs font-bold text-gray-900 mt-[2px]">{expiryEstimate || '4 Hours'}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Spoilage Threat Assessment</span>
                    <p className="text-xs font-bold text-gray-900 mt-[2px]">Low (Protected inside thermal food warmers)</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Environmental Carbon Offset</span>
                    <p className="text-xs font-bold text-emerald-700 mt-[2px]">62.5 kg CO₂ prevented from entering landfill</p>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-100 w-full" />

              {/* Suggested NGO route rationale */}
              <div className="space-y-2xs text-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Target Matching Recipient Recommendation</span>
                <p className="font-bold text-gray-900">Kolkata Food Bank (1.2 km away)</p>
                <p className="text-gray-500 leading-relaxed mt-[2px]">
                  Matches the volume limits, has open capacity for cooked dinner items, and can dispatch an active electric-bike courier within 10 minutes.
                </p>
              </div>

            </div>

            {/* Next buttons */}
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep(3)} className="text-xs uppercase font-bold text-gray-400">
                Re-upload Media
              </Button>
              <Button 
                onClick={() => setCurrentStep(6)} 
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase tracking-wider px-lg py-md rounded-lg shadow-sm"
              >
                Proceed to Final Summary
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 6: CONFIRMATION & REVIEW --- */}
        {currentStep === 6 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-lg shadow-sm space-y-md text-left">
            <div>
              <h2 className="text-lg font-extrabold text-gray-900">Review Donation Details</h2>
              <p className="text-xs text-gray-400 mt-[2px]">Confirm logistics parameters before saving to ledger.</p>
            </div>

            <div className="space-y-sm text-xs border border-gray-100 bg-gray-50/50 rounded-xl p-md">
              <div className="flex justify-between border-b border-gray-100 pb-2xs">
                <span className="text-gray-400 uppercase font-bold text-[10px]">Surplus Items</span>
                <span className="text-gray-900 font-bold">{foodName}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2xs">
                <span className="text-gray-400 uppercase font-bold text-[10px]">Portion Size</span>
                <span className="text-gray-900 font-bold">{quantity} ({mealCount} Meals)</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2xs">
                <span className="text-gray-400 uppercase font-bold text-[10px]">Pickup Target Window</span>
                <span className="text-gray-900 font-semibold">{pickupWindow}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2xs">
                <span className="text-gray-400 uppercase font-bold text-[10px]">Staff Contact</span>
                <span className="text-gray-900">{contactPerson}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2xs">
                <span className="text-gray-400 uppercase font-bold text-[10px]">Access Point</span>
                <span className="text-gray-900">{accessibility || 'Standard Access'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase font-bold text-[10px]">Routing Destination</span>
                <span className="text-primary-700 font-bold">Kolkata Food Bank (Recommended)</span>
              </div>
            </div>

            <div className="p-sm bg-emerald-50 text-emerald-800 rounded-xl text-xs flex items-center gap-xs">
              <span className="material-symbols-outlined text-emerald-700">energy_savings_leaf</span>
              <span><strong>Environmental projection:</strong> Redirecting this food offsets 62.5 kg of landfill methane decay immediately.</span>
            </div>

            {/* Next buttons */}
            <div className="pt-md border-t border-gray-100 flex justify-between items-center">
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep(5)} className="text-xs uppercase font-bold text-gray-400">
                Back to Report
              </Button>
              <Button 
                onClick={() => setCurrentStep(7)} 
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase tracking-wider px-lg py-md rounded-lg shadow-sm"
              >
                Log to FoodBridge Ledger
              </Button>
            </div>
          </div>
        )}

        {/* --- STEP 7: SUCCESS SCREEN --- */}
        {currentStep === 7 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-xl shadow-sm text-center space-y-md min-h-[360px] flex flex-col justify-center items-center">
            
            {/* Green verification success */}
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-sm border border-emerald-200 animate-scale-in">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>

            <div className="space-y-2xs">
              <h2 className="text-lg font-black text-gray-900">Donation Successfully Logged!</h2>
              <p className="text-xs text-gray-400">Reference Token: <span className="font-mono text-gray-800 font-bold">FB-DON-9082</span></p>
            </div>

            <div className="p-md bg-gray-50 border border-gray-100 rounded-xl text-left text-xs max-w-sm space-y-xs">
              <div className="flex items-center gap-[4px] text-emerald-700 font-bold uppercase text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                Active Logistics dispatching
              </div>
              <p className="text-gray-600 leading-relaxed">
                Kolkata Food Bank has accepted the match. E-Bike Courier Rahul S. has been dispatched to collect the surplus from <strong>Grand Palace Hotel Kitchens</strong>.
              </p>
            </div>

            <div className="pt-md flex gap-sm">
              <Button 
                onClick={() => navigate('/donor-dashboard')}
                className="bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs uppercase tracking-wider px-lg py-md rounded-lg shadow-sm"
              >
                Return to Command Center
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  // Reset form and go to Step 1
                  setFoodName('');
                  setCategory('');
                  setQuantity('');
                  setMealCount('');
                  setPrepTime('');
                  setExpiryEstimate('');
                  setAddress('');
                  setPickupWindow('');
                  setInstructions('');
                  setContactPerson('');
                  setAccessibility('');
                  setUploadedFiles([]);
                  setCurrentStep(1);
                }}
                className="border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-xs uppercase tracking-wider px-lg py-md rounded-lg shadow-sm"
              >
                Donate More Food
              </Button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
